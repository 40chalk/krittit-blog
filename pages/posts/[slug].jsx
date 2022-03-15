import React from 'react'
import {
  getNumberOfPostInSeries,
  getPostData,
  getPostFiles,
  getSeriesPostSlugByNumber,
} from '../../lib/post-functions/post-util'
import PostDetails from '../../components/posts/post-details/post-details'

function BlogPostPage(props) {
  const { post } = props
  return <PostDetails post={post} />
}

export async function getStaticProps(context) {
  const { slug } = context.params

  const post = getPostData(slug)

  if (post.series) {
    const seriesSlug = post.series.toLowerCase().replace(/ /g, '-')
    const totalInSeries = getNumberOfPostInSeries(seriesSlug)

    if (totalInSeries > 1 && +post.numberInSeries !== 1) {
      post.before = getSeriesPostSlugByNumber(
        seriesSlug,
        post.numberInSeries - 1
      )
    }

    if (+post.numberInSeries < totalInSeries) {
      post.after = getSeriesPostSlugByNumber(
        seriesSlug,
        post.numberInSeries + 1
      )
    }
  }

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const slugs = getPostFiles()

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export default BlogPostPage
