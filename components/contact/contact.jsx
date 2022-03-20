import React from 'react'
import Image from 'next/image'
import classes from './contact.module.css'
import {
  contactFormOn,
  contactStatement,
} from '../../global/site-settings-and-info'
import ContactForm from './contact-form/contact-form'
import Social from '../social/social'

function Contact() {
  return (
    <section className={classes.contact}>
      <h2>{contactStatement}</h2>
      <div className={classes.wrapper}>
        <div>
          <Image
            className={classes.image}
            src="/about.png"
            alt="logo"
            width={700}
            height={550}
            layout="responsive"
          />
        </div>
        {contactFormOn && <ContactForm />}
        <div>{!contactFormOn && <Social />}</div>
      </div>
    </section>
  )
}

export default Contact
