import React from 'react'
import Link from 'next/link'
import classes from './latest-post.module.css'
import paths from '../../../global/paths/paths'

function LatestPost() {
  return (
    <section className={classes.latestPost}>
      <h1>Latest From 40chalk</h1>
      <div className={classes.post}>
        Most recent post
        <Link href={paths.home}>
          <a>
            <div className={classes.image}>Picture</div>
            <div className={classes.excerpt}>Excerpt</div>
          </a>
        </Link>
      </div>
      <div className={classes.post}>
        Second most recent post
        <Link href={paths.home}>
          <a>
            <div className={classes.excerpt}>Excerpt</div>
            <div className={classes.image}>Picture</div>
          </a>
        </Link>
      </div>
      <div className={classes.post}>
        Third most recent post
        <Link href={paths.home}>
          <a>
            <div className={classes.image}>Picture</div>
            <div className={classes.excerpt}>Excerpt</div>
          </a>
        </Link>
      </div>
    </section>
  )
}

export default LatestPost
