import React from 'react'
import { getPostData, getPostFiles } from '../../lib/post-functions/post-util'
import PostDetails from '../../components/posts/post-details/post-details'

function BlogPostPage(props) {
  const { post } = props
  return <PostDetails post={post} />
}

export async function getStaticProps(context) {
  const { slug } = context.params

  const post = getPostData(slug)

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
