import React from 'react'
import Link from 'next/link'
import paths from '../../../global/paths/paths'
import classes from './series-pagination.module.css'

function SeriesPagination(props) {
  const { post } = props
  const { totalInSeries } = post

  if (totalInSeries === 1) {
    return ''
  }

  return (
    <div className={classes.pagination}>
      {post.before && `<---- `}
      {post.before && (
        <Link href={`${paths.allPost}/${post.before}`}>Previous </Link>
      )}
      -----
      {post.after && <Link href={`${paths.allPost}/${post.after}`}> Next</Link>}
      {post.after && ` ---->`}
    </div>
  )
}

export default SeriesPagination
