import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from './latest-post.module.css'
import paths from '../../../global/paths/paths'

function LatestPost(props) {
  const postsDir = '/blog-posts'
  const { posts } = props
  const post1 = posts[0]
  const post2 = posts[1]
  const post3 = posts[2]

  return (
    <section className={classes.latestPost}>
      <h1>Latest From 40chalk</h1>
      <div className={classes.post}>
        Most recent post
        <Link href={`${paths.allPost}/${post1.slug}`}>
          <a>
            <div className={classes.image}>
              <Image
                src={`${postsDir}/${post1.slug}/${post1.image}`}
                alt={post1.title}
                width={300}
                height={200}
              />
            </div>
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
