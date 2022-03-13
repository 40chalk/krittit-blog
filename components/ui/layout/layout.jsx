import React from 'react'
import MainNavigation from '../navigation/main-navigation'
import Footer from '../footer/footer'

function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
