import React from 'react'
import '../styles-page-global/globals.css'
import Layout from '../components/ui/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp
