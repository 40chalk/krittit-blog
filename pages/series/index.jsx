import React from 'react'
import classes from '../../styles-page-global/AllPostsPage.module.css'
import { getSeriesPreview } from '../../lib/post-functions/post-util'
import SeriesPreview from '../../components/posts/series-preview/series-preview'
import Hero from '../../components/ui/hero/hero'

function AllSeriesPage(props) {
  const { posts } = props

  return (
    <>
      <Hero />
      <section className={classes.allPosts}>
        {posts.map((post) => (
          <SeriesPreview key={post.slug} post={post} />
        ))}
      </section>
    </>
  )
}

export async function getStaticProps() {
  const posts = getSeriesPreview()

  return {
    props: {
      posts,
    },
  }
}

export default AllSeriesPage
