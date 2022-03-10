import React, { useState } from 'react'
import PostPreview from '../../components/posts/post-preview/post-preview'
import { getAllPost } from '../../lib/post-functions/post-util'
import classes from '../../styles-page-global/AllPostsPage.module.css'
import Search from '../../components/ui/search/search'
import {
  searchPosts,
  sortPostsByDate,
} from '../../lib/post-functions/search-and-sort-util'

function AllPostsPage(props) {
  const { posts } = props
  const [query, setQuery] = useState('')
  let queriedPosts = searchPosts(posts, query)

  function onSearchHandler(event) {
    setQuery(event.target.value)
  }

  if (query === '') {
    queriedPosts = sortPostsByDate(posts)
  }

  return (
    <>
      <Search onSearch={onSearchHandler} />
      <section className={classes.allPosts}>
        {/* eslint-disable-next-line array-callback-return,consistent-return */}
        {queriedPosts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </section>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPost()
  return {
    props: {
      posts,
    },
  }
}

export default AllPostsPage
