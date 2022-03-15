import React from 'react'
import Image from 'next/image'
import { logo } from '../../../global/site-settings-and-info'
import classes from './logo.module.css'

function Logo() {
  return (
    <div className={classes.logo}>
      {logo.imageOrText === 'image' && (
        <Image src={logo.imagePath} alt={logo.alt} width={200} height={100} />
      )}
      {logo.imageOrText === 'text' && <div>{logo.alt}</div>}
    </div>
  )
}

export default Logo
