import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'blog-posts')

const getPostFiles = () => fs.readdirSync(postsDirectory)

export function getPostData(postIdentifier) {
  const postMdPath = path.join(
    postsDirectory,
    `${postIdentifier}/${postIdentifier}.md`
  )
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
