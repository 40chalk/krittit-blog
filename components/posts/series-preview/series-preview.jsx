import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from '../post-preview/post-preview.module.css'
import paths from '../../../global/paths/paths'

function SeriesPreview(props) {
  const { post } = props

  const seriesSlug = post.series.toLowerCase().replace(/ /g, '-')

  return (
    <div className={classes.post}>
      <Link href={`${paths.allSeries}/${seriesSlug}`}>
        <a>
          <h1>{post.series}</h1>
          <div className={classes.postInfo}>
            <div className={classes.image}>
              <Image
                src={`${paths.postDir}/${post.slug}/${post.image}`}
                alt={post.title}
                width={600}
                height={400}
                layout="responsive"
              />
            </div>
            <div className={classes.excerptWrapper}>
              <div>{post.excerpt}</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default SeriesPreview
