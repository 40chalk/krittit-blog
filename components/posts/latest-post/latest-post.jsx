import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from './latest-post.module.css'
import paths from '../../../global/paths/paths'
import PostPreview from '../post-preview/post-preview'

function LatestPost(props) {
  const postsDir = '/blog-posts'
  const { posts } = props
  const post1 = posts[0]
  const post2 = posts[1]
  const post3 = posts[2]

  return (
    <>
      <section className={classes.latestPost}>
        <h1>{post1.title}</h1>
        <Link href={`${paths.allPost}/${post1.slug}`}>
          <a>
            <div className={classes.post}>
              <div className={classes.postContentImage}>
                <Image
                  src={`${postsDir}/${post1.slug}/${post1.image}`}
                  alt={post1.title}
                  width={1000}
                  height={550}
                  layout="responsive"
                />
              </div>
              <div className={classes.postContentExcerpt}>
                <blockquote>{post1.excerpt}</blockquote>
              </div>
            </div>
          </a>
        </Link>
      </section>
      <section>
        <div className={classes.postPreview}>
          <PostPreview post={post2} />
          <PostPreview post={post3} />
        </div>
      </section>
    </>
  )
}

export default LatestPost
