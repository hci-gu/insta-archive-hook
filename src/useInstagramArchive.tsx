import { useEffect, useState } from 'react'
import { htmlForPath, fileTreeFromZip, mediaForPath } from './utils'
import { CheerioAPI, Element, load } from 'cheerio'

enum ActivityType {
  Post = 'Post',
  Story = 'Story',
  Reel = 'Reel',
}

type Media = {
  url: string
  type: string
}

type Activity = {
  type: ActivityType
  timestamp: Date
  caption: string
  media: Media[]
}

enum InteractionType {
  Comment = 'Comment',
  Like = 'Like',
  Reaction = 'Reaction',
}

type Interaction = {
  type: InteractionType
  onType: ActivityType | InteractionType
  timestamp: Date
  mediaOwner: string
  content?: string
}

type DirectMessage = {
  sentByMe: boolean
  timestamp: Date
}

type Profile = {
  profilePictures: {
    timestamp: Date
    media: string
  }[]
  bio: {
    timestamp: Date
    text: string
  }[]
  username: string
  name: string
}

export type InstagramArchive = {
  startDate: Date
  profile: Profile
  activities: Activity[]
  interactions: Interaction[]
  directMessages: DirectMessage[]
}

type UseInstagramArchiveReturn = [
  InstagramArchive | undefined,
  (file: File) => void
]

const swedishToEnglishMonths: { [key: string]: string } = {
  jan: 'Jan',
  feb: 'Feb',
  mar: 'Mar',
  apr: 'Apr',
  maj: 'May',
  jun: 'Jun',
  jul: 'Jul',
  aug: 'Aug',
  sep: 'Sep',
  okt: 'Oct',
  nov: 'Nov',
  dec: 'Dec',
}

const swedishAmPm: { [key: string]: string } = {
  fm: 'AM',
  em: 'PM',
}

function normalizeDateString(dateString: string) {
  dateString = dateString.replace('Tid', '')
  // Replace Swedish months with English equivalents
  let normalized = dateString.replace(
    /\b(?:jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)\b/gi,
    (match: any) => swedishToEnglishMonths[match.toLowerCase()]
  )

  // Replace Swedish AM/PM indicators with English equivalents
  normalized = normalized.replace(
    /\b(?:fm|em)\b/gi,
    (match) => swedishAmPm[match.toLowerCase()]
  )

  // Remove any additional commas that might cause issues
  normalized = normalized.replace(/,/g, '')

  return normalized
}

const extractTimestamp = (dateString: string) => {
  const normalizedDate = normalizeDateString(dateString)
  const pstDate = new Date(normalizedDate)

  // check if invalid date
  if (isNaN(pstDate.getTime())) {
    console.log('Invalid date string:', dateString)
  }

  let pstTime = pstDate.getTime()

  // Step 3: Calculate the offset between PST and GMT+2 in milliseconds
  let pstOffset = -8 * 60 * 60 * 1000 // PST is UTC-8
  let gmtPlus2Offset = 2 * 60 * 60 * 1000 // GMT+2 is UTC+2
  let offsetDifference = gmtPlus2Offset - pstOffset

  // Step 4: Create a new Date object adjusted to GMT+2
  return new Date(pstTime + offsetDifference)
}

const getHtmlForAccountCreation = async (
  tree: any
): Promise<CheerioAPI | null> => {
  let $html = await htmlForPath(
    tree,
    'security_and_login_information.login_and_account_creation["signup_information.html"]'
  )
  if ($html) {
    return $html
  }
  $html = await htmlForPath(
    tree,
    'security_and_login_information.login_and_profile_creation["instagram_signup_details.html"]'
  )
  return $html
  return null
}

const getAccountCreationDate = async (tree: any): Promise<Date> => {
  try {
    const $html = await getHtmlForAccountCreation(tree)
    if (!$html) {
      return new Date(0)
    }

    let text = $html('table').text()
    text = text.replace('Time', '')
    return extractTimestamp(text)
  } catch (_) {
    return new Date(0)
  }
}

const captionAndTimeStampFromElement = (el: Element) => {
  let caption = ''
  let timestamp
  const captionEl = el.children[0] as any
  if (captionEl) {
    caption = captionEl.children[0].data
  }
  const timestampEl =
    el.children.length == 2 ? el.children[1] : (el.children[2] as any)
  if (timestampEl) {
    timestamp = extractTimestamp(timestampEl.children[0].data)
  }

  return { caption, timestamp }
}

const usernameAndTimestampFromElement = (el: Element) => {
  let username = ''
  let timestamp
  const usernameEl = el.children[0] as any
  if (usernameEl) {
    username = usernameEl.children[0].data
  }
  const timestampEl = el.children[1] as any
  if (timestampEl) {
    const nestedChild = timestampEl.children[0].children[1].children[0]
    timestamp = extractTimestamp(nestedChild.data)
  }

  return { username, timestamp }
}

const usernameAndTimestampFromStoryLikeElement = (el: Element) => {
  let username = ''
  let timestamp
  const usernameEl = el.children[0] as any
  if (usernameEl) {
    username = usernameEl.children[0].data
  }
  const timestampEl = el.children[1] as any
  if (timestampEl) {
    const nestedChild = timestampEl.children[0].children[0].children[0]
    timestamp = extractTimestamp(nestedChild.data)
  }

  return { username, timestamp }
}

const commentFromElement = (el: Element) => {
  try {
    const table = (el.children[0] as Element).children[1] as Element

    if (!table) {
      return null
    }

    const tbody = table.children[0] as Element

    let content = ''
    let username = ''
    let timestamp = new Date()
    const contentEl = tbody.children[0] as any
    if (contentEl) {
      content = contentEl.children[0].children[1].children[0].children[0].data
    }

    let usernameExists = tbody.children.length === 3

    if (usernameExists) {
      const usernameEl = tbody.children[1] as any
      if (usernameEl) {
        username = usernameEl.children[0].children[1].children[0].data
      }
    }
    const timestampEl = tbody.children[usernameExists ? 2 : 1] as any
    if (timestampEl) {
      const nestedChild = timestampEl.children[1].children[0]
      timestamp = extractTimestamp(nestedChild.data)
    }

    return { username, timestamp, content }
  } catch (_) {
    return null
  }
}

const directMessageFromElement = (el: Element) => {
  const senderElement = el.children[0] as any
  const timestampElement = el.children[2] as any

  let sender = ''
  let timestamp = new Date()

  if (senderElement) {
    sender = senderElement.children[0].data
  }

  if (timestampElement) {
    timestamp = extractTimestamp(timestampElement.children[0].data)
  }

  return { sender, timestamp }
}

const postElementToPost = async (
  fileTree: any,
  el: Element
): Promise<Activity | null> => {
  const { caption, timestamp } = captionAndTimeStampFromElement(el)
  if (!timestamp) {
    return null
  }

  let media: any = []
  const mediaEl = el.children.length == 2 ? el.children[0] : el.children[1]
  if (mediaEl) {
    const $ = load(mediaEl)

    media = await Promise.all(
      $('a')
        .toArray()
        .map((e) => mediaForPath(fileTree, e.attribs.href))
        .filter((m) => !!m)
    )
  }

  return {
    type: ActivityType.Post,
    timestamp,
    caption: caption ?? '',
    media,
  }
}

const storyElementToStory = async (
  fileTree: any,
  el: Element
): Promise<Activity | null> => {
  const { caption, timestamp } = captionAndTimeStampFromElement(el)
  if (!timestamp) {
    return null
  }

  let media: any = []
  const mediaEl = el.children[1]
  if (mediaEl) {
    const $ = load(mediaEl)

    media = await Promise.all(
      $('a')
        .toArray()
        .map((e) => mediaForPath(fileTree, e.attribs.href))
        .filter((m) => !!m)
    )
  }

  return {
    type: ActivityType.Story,
    timestamp,
    caption: caption ?? '',
    media,
  }
}

const postsFromTree = async (tree: any): Promise<Activity[]> => {
  const $html = await htmlForPath(
    tree,
    'your_instagram_activity.content["posts_1.html"]'
  )

  if (!$html) {
    return []
  }

  const posts = await Promise.all(
    $html('.uiBoxWhite')
      .toArray()
      .map((e) => postElementToPost(tree, e))
  )
  const postsFiltered = posts.filter((p) => p !== null) as Activity[]

  postsFiltered.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())

  return postsFiltered
}

const storiesFromTree = async (tree: any): Promise<Activity[]> => {
  const $html = await htmlForPath(
    tree,
    'your_instagram_activity.content["stories.html"]'
  )

  if (!$html) {
    return []
  }

  const storiesElements = $html('.uiBoxWhite').toArray()

  const stories = await Promise.all(
    storiesElements.map((e) => storyElementToStory(tree, e))
  )
  const storiesFiltered = stories.filter((p) => p !== null) as Activity[]

  return storiesFiltered
}

const profilefromTree = async (tree: any): Promise<Profile> => {
  const $html = await htmlForPath(
    tree,
    'personal_information.personal_information["personal_information.html"]'
  )

  if (!$html) {
    return {
      profilePictures: [],
      bio: [],
      username: '',
      name: '',
    }
  }

  let username = ''
  let name = ''
  let profilePictures = []
  const trs = $html('tr').toArray()
  for (const tr of trs) {
    const $tr = $html(tr)
    const td_text = $tr.find('td').text()
    // check if td_text contains username
    if (td_text.includes('Username')) {
      username = td_text.replace('Username', '')
    }
    if (td_text.includes('Användarnamn')) {
      username = td_text.replace('Användarnamn', '')
    }
    if (td_text.includes('Name')) {
      name = td_text.replace('Name', '')
    }
    if (td_text.includes('Namn')) {
      name = td_text.replace('Namn', '')
    }
  }

  const images = $html('a > img').toArray()

  for (const image of images) {
    const src = image.attribs['src']
    if (src) {
      profilePictures.push({
        timestamp: new Date(0),
        media: (await mediaForPath(tree, src))?.url ?? '',
      })
    }
  }

  return {
    profilePictures,
    bio: [],
    username,
    name,
  }
}

const likedPostsFromTree = async (tree: any): Promise<Interaction[]> => {
  const $html = await htmlForPath(
    tree,
    'your_instagram_activity.likes["liked_posts.html"]'
  )

  if (!$html) {
    return []
  }

  const likedPosts = $html('.uiBoxWhite')
    .toArray()
    .map((el) => {
      const { username, timestamp } = usernameAndTimestampFromElement(el)
      return {
        type: InteractionType.Like,
        timestamp,
        mediaOwner: username,
        onType: ActivityType.Post,
      }
    }) as Interaction[]

  return likedPosts
}

const likedStoriesFromTree = async (tree: any): Promise<Interaction[]> => {
  const $html = await htmlForPath(
    tree,
    'your_instagram_activity.story_sticker_interactions["story_likes.html"]'
  )

  if (!$html) {
    return []
  }

  const likedStories = $html('.uiBoxWhite')
    .toArray()
    .map((el) => {
      const { username, timestamp } =
        usernameAndTimestampFromStoryLikeElement(el)
      return {
        type: InteractionType.Like,
        timestamp,
        mediaOwner: username,
        onType: ActivityType.Story,
      }
    }) as Interaction[]

  return likedStories
}

const likedCommentsFromTree = async (tree: any): Promise<Interaction[]> => {
  const $html = await htmlForPath(
    tree,
    'your_instagram_activity.likes["liked_comments.html"]'
  )

  if (!$html) {
    return []
  }

  const likedComments = $html('.uiBoxWhite')
    .toArray()
    .map((el) => {
      const { username, timestamp } = usernameAndTimestampFromElement(el)
      return {
        type: InteractionType.Like,
        timestamp,
        mediaOwner: username,
        onType: InteractionType.Comment,
      }
    }) as Interaction[]

  return likedComments
}

const commentsFromTree = async (tree: any): Promise<Interaction[]> => {
  const commentsObj = tree['your_instagram_activity']['comments']
  let comments: Interaction[] = []
  for (const key in commentsObj) {
    const $html = await htmlForPath(
      tree,
      `your_instagram_activity.comments["${key}"]`
    )

    if (!$html) {
      continue
    }

    const _comments = (
      $html('.uiBoxWhite')
        .toArray()
        .map((el) => {
          const commentData = commentFromElement(el)

          if (!commentData) {
            return null
          }

          return {
            type: InteractionType.Comment,
            timestamp: commentData.timestamp,
            mediaOwner: commentData.username,
            onType: InteractionType.Comment,
            content: commentData.content,
          }
        }) as any[]
    ).filter((c) => c !== null) as Interaction[]
    comments = comments.concat(_comments)
  }

  return comments
}

const directMessagesFromTree = async (
  tree: any,
  name: string
): Promise<DirectMessage[]> => {
  const inbox = tree['your_instagram_activity']['messages']['inbox']

  let dms: DirectMessage[] = []
  for (const key in inbox) {
    const messagesWithUser = inbox[key]
    if (!messagesWithUser['message_1.html']) {
      continue
    }

    const $html = await htmlForPath(
      tree,
      `your_instagram_activity.messages.inbox["${key}"]["message_1.html"]`
    )

    if (!$html) {
      continue
    }

    const _dms = $html('.uiBoxWhite')
      .toArray()
      .map((el) => {
        const directMessageData = directMessageFromElement(el)
        const sentByMe = directMessageData.sender === name

        return {
          timestamp: directMessageData.timestamp,
          sentByMe,
        }
      })

    dms = dms.concat(_dms)
  }

  dms.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())

  return dms
}

const interactionsFromTree = async (tree: any): Promise<Interaction[]> => {
  const [likedPosts, likedStories, likedComments, comments] = await Promise.all(
    [
      likedPostsFromTree(tree),
      likedStoriesFromTree(tree),
      likedCommentsFromTree(tree),
      commentsFromTree(tree),
    ]
  )

  const interactions = [
    ...likedComments,
    ...likedStories,
    ...likedPosts,
    ...comments,
  ].filter((i) => i.timestamp)
  interactions.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())

  return interactions
}

const archiveFromTree = async (tree: any): Promise<InstagramArchive> => {
  let profile

  try {
    profile = await profilefromTree(tree)
  } catch (e) {
    console.error('Error getting profile', e)
    profile = {
      profilePictures: [],
      bio: [],
      username: '',
      name: '',
    }
  }

  const [startDate, posts, stories, directMessages, interactions] =
    await Promise.all([
      getAccountCreationDate(tree),
      postsFromTree(tree),
      storiesFromTree(tree),
      directMessagesFromTree(tree, profile.name),
      interactionsFromTree(tree),
    ])
  const activities = [...posts, ...stories]
  activities.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())

  // const profilePictures = await
  return {
    startDate,
    profile,
    interactions,
    activities,
    directMessages,
  }
}

function useInstagramArchive(): UseInstagramArchiveReturn {
  const [file, setFile] = useState<File | null>(null)
  const [archive, setArchive] = useState<InstagramArchive | undefined>()

  useEffect(() => {
    if (!file) return

    fileTreeFromZip(file).then(async (fileTree) => {
      const archive = await archiveFromTree(fileTree)
      setArchive(archive)
    })
  }, [file, setArchive])

  return [archive, setFile]
}

export default useInstagramArchive
