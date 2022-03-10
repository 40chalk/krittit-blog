import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortPostsByDate } from './search-and-sort-util'

// get path for the blog files where they are initially added the /public/blog-posts folder
const postsStartDirectory = path.join(process.cwd(), 'public', 'blog-posts')

// get path for where the blog files end up after build /blog-posts
const postsEndDirectory = path.join(process.cwd(), 'blog-posts')

// get "slugs" for all the blog posts
const getPostFiles = () => fs.readdirSync(postsStartDirectory)

// helper function that moves file from one place to another
function moveFile(currentPath, destinationPath) {
  fs.rename(currentPath, destinationPath, (err) => {
    if (err) {
      throw err
    }
  })
}

// check if the blog md files are still in public folder. If they are moves them to blog-posts folder
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

/* returns post object
  slug: string derived from initial directory name
  ...data: derived from gray-matter package. Key value pairs at the beginning of md files
  content: derived from gray-matter package. Main body of md files
*/
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

// Gets all posts and sorts them from most recent to the least recent
export function getAllPost() {
  const postDirs = getPostFiles()
  const sorted = postDirs.map((post) => getPostData(post))
  return sortPostsByDate(sorted)
}

export function getLastThreePost() {
  const allPosts = getAllPost()
  return [allPosts[0], allPosts[1], allPosts[2]]
}
