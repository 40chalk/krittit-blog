import React from 'react'
import Head from 'next/head'
import Hero from '../components/ui/hero/hero'
import LatestPost from '../components/posts/latest-post/latest-post'
import { getLastFourPost } from '../lib/post-functions/post-util'
import { metaData } from '../global/site-settings-and-info'

export default function Home(props) {
  const { posts } = props
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.homePage} />
      </Head>
      <Hero />
      <LatestPost posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const featuredPosts = getLastFourPost()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}
