import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBitbucket,
  faFacebookSquare,
  faGithubSquare,
  faGitlab,
  faInstagramSquare,
  faLinkedin,
  faPatreon,
  faStackOverflow,
  faTwitterSquare,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons'
import { social } from '../../global/site-settings-and-info'

function Social() {
  return (
    <>
      {social.bitbucket && (
        <Link href={social.bitbucket}>
          <a>
            <FontAwesomeIcon icon={faBitbucket} />
          </a>
        </Link>
      )}
      {social.facebook && (
        <Link href={social.facebook}>
          <a>
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
        </Link>
      )}
      {social.github && (
        <Link href={social.github}>
          <a>
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </Link>
      )}
      {social.gitlab && (
        <Link href={social.gitlab}>
          <a>
            <FontAwesomeIcon icon={faGitlab} />
          </a>
        </Link>
      )}
      {social.instagram && (
        <Link href={social.instagram}>
          <a>
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
        </Link>
      )}
      {social.linkedin && (
        <Link href={social.linkedin}>
          <a>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Link>
      )}
      {social.patreon && (
        <Link href={social.patreon}>
          <a>
            <FontAwesomeIcon icon={faPatreon} />
          </a>
        </Link>
      )}
      {social.stackoverflow && (
        <Link href={social.stackoverflow}>
          <a>
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </Link>
      )}
      {social.twitter && (
        <Link href={social.twitter}>
          <a>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </Link>
      )}
      {social.youtube && (
        <Link href={social.youtube}>
          <a>
            <FontAwesomeIcon icon={faYoutubeSquare} />
          </a>
        </Link>
      )}
    </>
  )
}

export default Social
