import React from 'react'
import Hero from '../components/ui/hero/hero'
import LatestPost from '../components/posts/latest-post/latest-post'
import { getLastFourPost } from '../lib/post-functions/post-util'

export default function Home(props) {
  const { posts } = props
  return (
    <>
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
