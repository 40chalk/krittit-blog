import React from 'react'
import Image from 'next/image'
import classes from './hero.module.css'

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.desktop}>
        <Image
          className={classes.desktop}
          src="/banner.png"
          alt="Code Languages"
          height={486}
          width={1920}
          layout="responsive"
        />
      </div>
      <div className={classes.mobile}>
        <Image
          className={classes.mobile}
          src="/mobile-banner.png"
          alt="Code Languages"
          height={486}
          width={800}
          layout="responsive"
        />
      </div>
    </div>
  )
}

export default Hero
