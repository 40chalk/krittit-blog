import React from 'react'
import Hero from '../components/ui/hero/hero'
import LatestPost from '../components/posts/latest-post/latest-post'
import { getLastThreePost } from '../lib/post-functions/post-util'

export default function Home(props) {
  console.log(props)
  return (
    <>
      <Hero />
      <LatestPost posts={props} />
    </>
  )
}

export async function getStaticProps() {
  const featuredPosts = await getLastThreePost()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}
