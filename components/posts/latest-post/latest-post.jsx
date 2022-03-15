import React from 'react'
import Image from 'next/image'
import classes from './latest-post.module.css'
import PostPreview from '../post-preview/post-preview'
import aboutInfo from '../../../global/about-info'

function LatestPost(props) {
  const { posts } = props
  const post1 = posts[0]
  const post2 = posts[1]
  const post3 = posts[2]
  const post4 = posts[3]

  return (
    <>
      <section className={classes.latestPost}>
        <div>
          <div>
            <Image src="/about.png" alt="logo" width={800} height={700} />
          </div>
          <div className={classes.aboutInfo}>
            <p>{aboutInfo}</p>
          </div>
          <PostPreview post={post1} />
        </div>
      </section>
      <section>
        <div className={classes.postPreview}>
          <PostPreview post={post2} />
          <PostPreview post={post3} />
          <PostPreview post={post4} />
        </div>
      </section>
    </>
  )
}

export default LatestPost
