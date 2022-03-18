import React from 'react'
import Head from 'next/head'
import Hero from '../../components/ui/hero/hero'
import Contact from '../../components/contact/contact'
import { metaData } from '../../global/site-settings-and-info'

function ContactPage() {
  return (
    <>
      <Head>
        <title>{`${metaData.title} Contact`}</title>
        <meta name="description" content={metaData.contactPage} />
      </Head>
      <Hero />
      <Contact />
    </>
  )
}

export default ContactPage
