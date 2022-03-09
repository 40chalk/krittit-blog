import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsStartDirectory = path.join(process.cwd(), 'public', 'blog-posts')
const postsEndDirectory = path.join(process.cwd(), 'blog-posts')

const getPostFiles = () => fs.readdirSync(postsStartDirectory)

function moveFile(currentPath, destinationPath) {
  fs.rename(currentPath, destinationPath, (err) => {
    if (err) {
      throw err
    }
  })
}

function moveMdFiles() {
  const startDirs = fs.readdirSync(postsStartDirectory)

  // eslint-disable-next-line consistent-return
  startDirs.map(async (dir) => {
    const currentPath = `${postsStartDirectory}/${dir}/${dir}.md`
    const destinationPath = `${postsEndDirectory}/${dir}.md`

    if (fs.existsSync(currentPath)) {
      moveFile(currentPath, destinationPath)
    }
  })
}

moveMdFiles()

export function getPostData(postIdentifier) {
  const postMdPath = path.join(postsEndDirectory, `${postIdentifier}.md`)
  const postMdContent = fs.readFileSync(postMdPath, 'utf-8')
  const { data, content } = matter(postMdContent)

  return {
    slug: postIdentifier,
    ...data,
    content,
  }
}

export function getAllPost() {
  const postDirs = getPostFiles()
  const sorted = postDirs.map((post) => getPostData(post))
  sorted.sort((postA, postB) => (postA.date > postB.date ? -1 : 1))
  return JSON.parse(JSON.stringify(sorted))
}

export function getLastThreePost() {
  const allPosts = getAllPost()
  return [allPosts[0], allPosts[1], allPosts[2]]
}
