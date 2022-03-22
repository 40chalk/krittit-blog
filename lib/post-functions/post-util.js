import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {
  sortPostsByDate,
  sortSeriesPostsByLatest,
} from './search-and-sort-util'
import { seriesOn } from '../../global/site-settings-and-info'

// get path for the blog files where they are initially added the /public/blog-posts folder
const postsStartDirectory = path.join(process.cwd(), 'public', 'blog-posts')

// get path for where the blog files end up after build /blog-posts
const postsEndDirectory = path.join(process.cwd(), 'blog-posts')

// get "slugs" for all the blog posts
export const getPostFiles = () => fs.readdirSync(postsStartDirectory)

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

  // eslint-disable-next-line consistent-return,array-callback-return
  startDirs.map((dir) => {
    const currentPath = `${postsStartDirectory}/${dir}/${dir}.md`
    const destinationPath = `${postsEndDirectory}/${dir}.md`

    if (!fs.existsSync(currentPath)) {
      return
    }

    moveFile(currentPath, destinationPath)
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

  const post = {
    slug: postIdentifier,
    ...data,
    content,
  }

  return JSON.parse(JSON.stringify(post))
}

// Gets all posts and sorts them from most recent to the least recent
export function getAllPost() {
  const postDirs = getPostFiles()
  const sorted = postDirs.map((post) => getPostData(post))
  return sortPostsByDate(sorted)
}

// Gets the last four posts
export function getLastFourPost() {
  const allPosts = getAllPost()
  return [allPosts[0], allPosts[1], allPosts[2], allPosts[3]]
}

// Gets all of the series names
export function getAllSeriesNames() {
  if (!seriesOn) {
    return []
  }
  const posts = getAllPost()
  const seriesNames = []
  // eslint-disable-next-line array-callback-return
  posts.map((post) => {
    if (post.series) {
      seriesNames.push(post.series)
    }
  })

  const set = new Set(seriesNames)

  return Array.from(set)
}

// Returns all of the posts in a series sorted from most recent
export function getSeriesPosts(seriesIdentifier) {
  const posts = getAllPost()
  const seriesOrNot = posts.filter((post) => post.series)
  const seriesPosts = seriesOrNot.filter(
    (post) => post.series.toLowerCase().replace(/ /g, '-') === seriesIdentifier
  )
  return sortSeriesPostsByLatest(seriesPosts)
}

// Returns the most recent post in a series
export function getLatestSeriesPost(seriesIdentifier) {
  const posts = getSeriesPosts(seriesIdentifier)

  return posts[0]
}

// Returns the latest posts of each series
export function getSeriesPreview() {
  const seriesNames = getAllSeriesNames()
  return seriesNames.map((name) => getLatestSeriesPost(name))
}

// Returns all posts in a series
export function getNumberOfPostInSeries(series) {
  const seriesPosts = getSeriesPosts(series)
  return seriesPosts.length
}

// Returns post object from number within specific series
export function getSeriesPostSlugByNumber(series, number) {
  const seriesPosts = getSeriesPosts(series)
  const seriesPost = seriesPosts.filter(
    (post) => post.numberInSeries === number
  )
  return seriesPost[0].slug
}
