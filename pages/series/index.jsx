import React from 'react'
import Head from 'next/head'
import classes from '../../styles-page-global/AllPostsPage.module.css'
import { getSeriesPreview } from '../../lib/post-functions/post-util'
import SeriesPreview from '../../components/posts/series-preview/series-preview'
import Hero from '../../components/ui/hero/hero'
import { metaData } from '../../global/site-settings-and-info'

function AllSeriesPage(props) {
  const { posts } = props

  return (
    <>
      <Head>
        <title>{`${metaData.title} Series`}</title>
        <meta name="description" content={metaData.seriesPage} />
      </Head>
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
