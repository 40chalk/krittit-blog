import React from 'react'
import classes from '../../../styles-page-global/AllPostsPage.module.css'
import PostPreview from '../../../components/posts/post-preview/post-preview'
import {
  getAllSeriesNames,
  getSeriesPosts,
} from '../../../lib/post-functions/post-util'

function SeriesPage(props) {
  const { posts } = props
  return (
    <section className={classes.allPosts}>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </section>
  )
}

export async function getStaticProps(context) {
  const { seriesId } = context.params
  const seriesPosts = getSeriesPosts(seriesId)

  return {
    props: {
      posts: seriesPosts,
    },
  }
}

export async function getStaticPaths() {
  const seriesNames = getAllSeriesNames()
  const seriesSlugs = seriesNames.map((name) =>
    name.toLowerCase().replace(/ /g, '-')
  )

  return {
    paths: seriesSlugs.map((slug) => ({ params: { seriesId: slug } })),
    fallback: false,
  }
}

export default SeriesPage
