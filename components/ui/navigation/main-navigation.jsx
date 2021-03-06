import React from 'react'
import Link from 'next/link'
import { paths, seriesOn } from '../../../global/site-settings-and-info'
import Logo from '../logo/logo'
import classes from './main-navigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={paths.allPost}>Posts</Link>
          </li>
          {seriesOn && (
            <li>
              <Link href={paths.allSeries}>Series</Link>
            </li>
          )}
          <li>
            <Link href={paths.contact}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
