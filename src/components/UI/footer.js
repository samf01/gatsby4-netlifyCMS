import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer>
      <Link to="/">© 2022 Land Design Studios Ltd</Link>
      <Link to="/cookie-policy">Cookie Policy</Link>
      <a href="/#about">About</a>
      <a href="/#projects">Projects</a>
      <a href="/#contact">Contact Us</a>
    </footer>
  )
}

export default Footer
