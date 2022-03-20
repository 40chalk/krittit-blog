import React from 'react'
import classes from './footer.module.css'
import Social from '../../social/social'

function Footer() {
  return (
    <div className={classes.footer}>
      Follow Me On
      <Social />
    </div>
  )
}

export default Footer
