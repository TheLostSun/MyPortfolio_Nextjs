import React from 'react'
import Header from "./header/FullHeader.js"
import Footer from "./footer/Footer.js"

const Layout = ({children}) => {
  return (
    <>
          <Header/>
          <main>{children}</main>
          <Footer/>
    </>
  )
}

export default Layout