import * as zip from '@zip.js/zip.js'
import { load } from 'cheerio'

const ignorePathsPrefixes = ['__', '._', '.DS_Store']
const shouldIgnorePath = (path: string) => {
  return ignorePathsPrefixes.some((prefix) => path.startsWith(prefix))
}

export const fileTreeFromZip = async (file: File) => {
  const reader = new zip.ZipReader(new zip.BlobReader(file))
  const entries = await reader.getEntries()

  let root: any = {}

  for (const entry of entries) {
    const pathParts = entry.filename.split('/')
    let currentLevel = root

    // Iterate through the path parts to build the structure
    for (let i = 0; i < pathParts.length; i++) {
      const part = pathParts[i]
      if (shouldIgnorePath(part)) {
        continue
      }

      // Check if we're at a file or still navigating/creating folders
      if (i === pathParts.length - 1) {
        // It's a file, add it directly
        currentLevel[part] = entry
      } else {
        // It's a folder, create it if it doesn't exist
        if (!currentLevel[part]) {
          currentLevel[part] = {}
        }
        // Move into the next level of the structure
        currentLevel = currentLevel[part]
      }
    }
  }

  if (Object.keys(root).length === 1) {
    root = root[Object.keys(root)[0]]
  }
  console.log(root)

  return root
}

export const htmlForPath = async (fileTree: any, path: string) => {
  console.log(fileTree)
  const data = eval(`fileTree.${path}`)

  // need a writer to read the data
  const writer = new zip.TextWriter()
  const html = await data.getData(writer)

  // parse the html with cheerio
  const $html = load(html)
  return $html
}

export const imageForPath = async (fileTree: any, path: string) => {
  const keys = path.split('/')
  let currentLevel = fileTree
  for (const key of keys) {
    currentLevel = currentLevel[key]
  }

  if (!currentLevel) {
    console.log(path)
    return null
  }

  const writer = new zip.BlobWriter()
  const blob = await currentLevel.getData(writer)

  return URL.createObjectURL(blob)
}
