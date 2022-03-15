import React from 'react'
import Image from 'next/image'
import { paths } from '../../../global/site-settings-and-info'
import classes from './post-header.module.css'

function PostHeader(props) {
  const { title, image, slug } = props
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image
        src={`${paths.postDir}/${slug}/${image}`}
        alt={title}
        width={200}
        height={150}
      />
    </header>
  )
}

export default PostHeader
