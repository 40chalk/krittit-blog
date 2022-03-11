import React, { useState } from 'react'
import PostPreview from '../../components/posts/post-preview/post-preview'
import classes from '../../styles-page-global/AllPostsPage.module.css'
import Search from '../../components/ui/search/search'
import {
  filterPosts,
  searchPosts,
  sortPostsByDate,
} from '../../lib/post-functions/search-and-sort-util'
import Filter from '../../components/ui/filter/filter'
import { getAllPost } from '../../lib/post-functions/post-util'

function AllPostsPage(props) {
  const { posts } = props
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('')
  let queriedPosts = searchPosts(posts, query)

  function onSearchHandler(event) {
    setQuery(event.target.value)
  }

  function onFilterChangeHandler(event) {
    if (event.target.value === filter) {
      event.target.checked = false
      setFilter('')
    }
    if (event.target.value !== filter) {
      setFilter(event.target.value)
    }
  }

  if (query === '') {
    queriedPosts = sortPostsByDate(posts)
  }

  return (
    <>
      <Search onSearch={onSearchHandler} />
      <Filter onFilter={onFilterChangeHandler} />
      <section className={classes.allPosts}>
        {/* eslint-disable-next-line array-callback-return,consistent-return */}
        {queriedPosts.map((post) => {
          if (filterPosts(filter, post.filterKeys)) {
            return <PostPreview key={post.slug} post={post} />
          }
        })}
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
