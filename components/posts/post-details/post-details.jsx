import React from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import classes from './post-details.module.css'
import { paths } from '../../../global/site-settings-and-info'
import PostHeader from '../post-header/post-header'
import SeriesPagination from '../series-pagination/series-pagination'

SyntaxHighlighter.registerLanguage('javascript', js)
SyntaxHighlighter.registerLanguage('css', css)

function PostDetails(props) {
  const { post } = props
  const { title, image, content, slug } = post

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph

      if (node.children[0].tagName === 'img') {
        const nestedImage = node.children[0]

        return (
          <div className={classes.image}>
            <Image
              src={`${paths.postDir}/${slug}/${nestedImage.properties.src}`}
              alt={nestedImage.alt}
              width={1000}
              height={500}
            />
          </div>
        )
      }
      return <p>{paragraph.children}</p>
    },
    code(code) {
      const { className, children } = code
      const language = className.replace('language-', '')

      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      )
    },
  }

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={image} slug={slug} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      {post.series && <SeriesPagination post={post} />}
    </article>
  )
}

export default PostDetails
