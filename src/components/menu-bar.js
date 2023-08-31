import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './menu-bar.css'

const MenuBar = (props) => {
  return (
    <div className="menu-bar-menu-bar">
      <div className="menu-bar-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="menu-bar-image"
        />
      </div>
      <div className="menu-bar-container1">
        <Link to="/" className="menu-bar-navlink">
          <div className="menu-bar-btn-enable">
            <span className="text-2">{props.text}</span>
          </div>
        </Link>
        <Link to="/about-us" className="menu-bar-navlink1">
          <div className="menu-bar-btn-disable">
            <span className="text-2">{props.text1}</span>
          </div>
        </Link>
        <div className="menu-bar-btn-disable">
          <span className="text-2">{props.text2}</span>
        </div>
        <Link to="/product" className="menu-bar-navlink2">
          <div className="menu-bar-btn-disable">
            <span className="text-2">{props.text3}</span>
          </div>
        </Link>
        <div className="menu-bar-btn-disable">
          <span className="text-2">{props.text4}</span>
        </div>
        <div className="menu-bar-btn-disable">
          <span className="text-2">{props.text5}</span>
        </div>
      </div>
      <Link to="/login" className="menu-bar-navlink3">
        <div className="menu-bar-container8">
          <span className="text-2">{props.text6}</span>
        </div>
      </Link>
    </div>
  )
}

MenuBar.defaultProps = {
  text1: 'About us',
  text2: 'Service',
  text6: 'Login',
  text5: 'Resource',
  image_src: '/up2datalogo%20(3)1-200h.png',
  text4: 'Pricing',
  text: 'Home',
  image_alt: 'image',
  text3: 'Product',
}

MenuBar.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text6: PropTypes.string,
  text5: PropTypes.string,
  image_src: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  text3: PropTypes.string,
}

export default MenuBar
