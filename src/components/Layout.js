import React from 'react'
import './Layout.css'
import Footer from './UI/footer'
import NavBar from './UI/nav'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="grid-column-12">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
