import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import classes from '../post-preview/post-preview.module.css'
import { paths } from '../../../global/site-settings-and-info'

function SeriesPreview(props) {
  const { post } = props

  const seriesSlug = post.series.toLowerCase().replace(/ /g, '-')

  const formattedDate = new Date(
    moment(post.date, 'YYYY-MM-DD')
  ).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

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
              <time>{formattedDate}</time>
              <p>{post.excerpt}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default SeriesPreview
