import { useEffect, useState } from 'react'
import { htmlForPath, fileTreeFromZip, imageForPath } from './utils'
import { Element, load } from 'cheerio'

type Post = {
  timestamp: Date
  caption: string
  media: []
}

export type InstagramArchive = {
  startDate: Date
  posts: Post[]
}

type UseInstagramArchiveReturn = [
  InstagramArchive | undefined,
  (file: File) => void
]

const getAccountCreationDate = async (tree: any): Promise<Date> => {
  const $html = await htmlForPath(
    tree,
    'security_and_login_information.login_and_account_creation["signup_information.html"]'
  )
  let text = $html('table').text()
  text = text.replace('Time', '')
  return new Date(text)
}

const postElementToPost = async (fileTree: any, el: Element): Promise<Post> => {
  let caption = ''
  let timestamp = new Date()
  let media: any = []
  const captionEl = el.children[0] as any
  if (captionEl) {
    caption = captionEl.children[0].data
  }
  const timestampEl = el.children[2] as any
  if (timestampEl) {
    timestamp = new Date(timestampEl.children[0].data)
  }
  const mediaEl = el.children[1]
  if (mediaEl) {
    const $ = load(mediaEl)

    media = await Promise.all(
      $('a')
        .toArray()
        .map((e) => imageForPath(fileTree, e.attribs.href))
    )
  }

  //   console.log(el)

  return {
    timestamp,
    caption,
    media,
  }
}

const postsFromTree = async (tree: any): Promise<Post[]> => {
  const $html = await htmlForPath(
    tree,
    'your_instagram_activity.content["posts_1.html"]'
  )

  const posts = await Promise.all(
    $html('.uiBoxWhite')
      .toArray()
      .map((e) => postElementToPost(tree, e))
  )

  posts.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())

  return posts
}

const archiveFromTree = async (tree: any): Promise<InstagramArchive> => {
  const startDate = await getAccountCreationDate(tree)
  const posts = await postsFromTree(tree)
  return {
    startDate,
    posts,
  }
}

function useInstagramArchive(): UseInstagramArchiveReturn {
  const [file, setFile] = useState<File | null>(null)
  const [archive, setArchive] = useState<InstagramArchive | undefined>()

  useEffect(() => {
    if (!file) return

    fileTreeFromZip(file).then(async (fileTree) => {
      const archive = await archiveFromTree(fileTree)
      console.log(fileTree)
      setArchive(archive)
    })
  }, [file, setArchive])

  return [archive, setFile]
}

export default useInstagramArchive
