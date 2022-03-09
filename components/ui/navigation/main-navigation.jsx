import React from 'react'
import Link from 'next/link'
import paths from '../../../global/paths/paths'
import Logo from '../logo/logo'
import classes from './main-navigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'><a><Logo /></a></Link>
      <nav>
        <ul>
          <li><Link href={paths.allPost}>All Posts</Link></li>
          <li><Link href={paths.contact}>Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
