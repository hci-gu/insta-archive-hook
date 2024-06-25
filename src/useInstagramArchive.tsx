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

const postElementToPost = async (
  fileTree: any,
  el: Element
): Promise<Post | null> => {
  let caption = ''
  let timestamp
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

  if (!timestamp || !caption) {
    return null
  }

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
  const postsFiltered = posts.filter((p) => p !== null) as Post[]

  postsFiltered.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())

  return postsFiltered
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
      setArchive(archive)
    })
  }, [file, setArchive])

  return [archive, setFile]
}

export default useInstagramArchive
