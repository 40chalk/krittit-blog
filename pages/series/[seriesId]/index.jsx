import React, { useState } from 'react'
import Head from 'next/head'
import classes from '../../../styles-page-global/AllPostsPage.module.css'
import {
  getAllSeriesNames,
  getSeriesPosts,
} from '../../../lib/post-functions/post-util'
import {
  sortSeriesPostsByLatest,
  sortSeriesPostsByNumberOrder,
} from '../../../lib/post-functions/search-and-sort-util'
import PostPreview from '../../../components/posts/post-preview/post-preview'

function SeriesPage(props) {
  const { posts } = props
  const [sorted, setSorted] = useState(sortSeriesPostsByLatest(posts))
  const [dateToggle, setDateToggle] = useState(false)
  const [numberToggle, setNumberToggle] = useState(true)

  const postsByDate = sortSeriesPostsByLatest(posts)
  const postsByNumber = sortSeriesPostsByNumberOrder(posts)

  function sortedByDate() {
    dateToggle ? setSorted(postsByDate) : setSorted(postsByDate.reverse())
    setDateToggle(!dateToggle)
  }

  function sortedByOrder() {
    numberToggle ? setSorted(postsByNumber) : setSorted(postsByNumber.reverse())
    setNumberToggle(!numberToggle)
  }

  return (
    <>
      <Head>
        <title>{`${posts[posts.length - 1].series}`}</title>
        <meta name="description" content={posts[posts.length - 1].excerpt} />
      </Head>
      <section className={classes.controls}>
        <span role="presentation" onClick={sortedByDate}>
          Sort By Date {dateToggle ? '\u25B2' : '\u25BC'}
        </span>
        <span onClick={sortedByOrder} role="presentation">
          Sort By Order In Series {numberToggle ? '\u25BC' : '\u25B2'}
        </span>
      </section>
      <section className={classes.allPosts}>
        {sorted.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </section>
    </>
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
