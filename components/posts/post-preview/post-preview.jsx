import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from './post-preview.module.css'
import paths from '../../../global/paths/paths'

function PostPreview(props) {
  const { post } = props

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
                width={400}
                height={200}
                layout="responsive"
              />
            </div>
            <div className={classes.excerpt}>{post.excerpt}</div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default PostPreview
