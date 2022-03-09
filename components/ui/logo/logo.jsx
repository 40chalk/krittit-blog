import React from 'react'
import Image from 'next/image'
import paths from '../../../global/paths/paths'
import classes from './logo.module.css'

function Logo() {

  return (
    <div className={classes.logo}>
      {paths.logo.imageOrText === 'image' &&
        <Image src={paths.logo.imagePath} alt={paths.logo.alt} width={200} height={100} />}
      {paths.logo.imageOrText === 'text' && <div>{paths.logo.alt}</div>}
    </div>
  )
}

export default Logo
