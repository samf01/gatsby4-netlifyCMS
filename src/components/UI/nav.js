import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import * as NavStyles from './nav.module.css'
import { Hamburger } from './Hamburgers'
import { useTransition, animated } from 'react-spring'
import PropTypes from 'prop-types'
import _ from 'lodash'

import useMediaQuery from '../Hooks/MatchMedia'
import { Logo } from '../../../static/assets/Logo'

const MenuItems = () => {
  return (
    <div className="nav-list">
      <a className="nav-item" href="/#about">
        ABOUT
      </a>
      <a className="nav-item" href="/#projects">
        Projects
      </a>
      <a className="nav-item" href="/#contact">
        CONTACT
      </a>
    </div>
  )
}

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  let mobile = useMediaQuery('(min-width: 1024px)')
  const [scrollPosY, prevScrollPosY] = useState(0)

  useEffect(() => {
    const scrollFunction = _.debounce(() => {
      let currentScrollPosY = window.scrollY
      if (scrollPosY > currentScrollPosY) {
        document.getElementById('navbar').style.top = '0'
      } else {
        document.getElementById('navbar').style.top = '-60px'
      }
      prevScrollPosY(currentScrollPosY)
    }, 12)

    window.addEventListener('scroll', () => {
      scrollFunction()
    })

    return () => {
      window.removeEventListener('scroll', scrollFunction)
    }
  }, [scrollPosY])

  const appear = useTransition(navbarOpen, {
    from: { right: '-50%', height: '0em' },
    enter: { height: '10em', right: '0%' },
    leave: { right: '-50%', height: '0em' },
  })

  return (
    <nav id="navbar">
      <div className="nav-bar">
        <div>
          <Link to="/#">
            <Logo />
          </Link>
        </div>
        {mobile ? (
          <MenuItems />
        ) : (
          <button
            aria-label="button"
            className="toggle"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Hamburger open={navbarOpen} id={NavStyles.navicon2} />
          </button>
        )}
      </div>
      {appear(
        (appear, item) =>
          item && (
            <animated.div
              className="mobile-menu"
              aria-label={'menu'}
              onClick={() => setNavbarOpen(!navbarOpen)}
              style={appear}
            >
              <MenuItems />
            </animated.div>
          )
      )}
    </nav>
  )
}

NavBar.propTypes = {
  navbarOpen: PropTypes.bool,
}

export default NavBar
