import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import classes from './post-preview.module.css'
import { paths } from '../../../global/site-settings-and-info'

function PostPreview(props) {
  const { post } = props

  const formattedDate = new Date(
    moment(post.date, 'YYYY-MM-DD')
  ).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className={classes.post}>
      <Link href={`${paths.allPost}/${post.slug}`}>
        <a>
          <h1>{post.title}</h1>
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

export default PostPreview
