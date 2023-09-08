import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './menu-bottom-mobil-component.css'

const MenuBottomMobilComponent = (props) => {
  return (
    <div className="menu-bottom-mobil-component-menu-bottom-mobil-component">
      <div className="menu-bottom-mobil-component-container border-b">
        <div className="menu-bottom-mobil-component-container1">
          <Link to="/" className="menu-bottom-mobil-component-navlink">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="menu-bottom-mobil-component-image"
            />
          </Link>
        </div>
        <span className="text-2 menu-bottom-mobil-component-text">
          <span>Drive Sales by thinking </span>
          <span>outside the box</span>
        </span>
      </div>
      <div className="menu-bottom-mobil-component-container2">
        <div className="menu-bottom-mobil-component-container3">
          <span className="menu-bottom-mobil-component-text03">
            {props.text}
          </span>
          <Link to="/" className="menu-bottom-mobil-component-navlink1 text-2">
            {props.text1}
          </Link>
          <Link
            to="/mail-cloud"
            className="menu-bottom-mobil-component-navlink2 text-2"
          >
            {props.text2}
          </Link>
          <Link
            to="/near-cloud"
            className="menu-bottom-mobil-component-navlink3 text-2"
          >
            {props.text3}
          </Link>
          <Link
            to="/about-us"
            className="menu-bottom-mobil-component-navlink4 text-2"
          >
            {props.text4}
          </Link>
        </div>
        <div className="menu-bottom-mobil-component-container4">
          <span className="menu-bottom-mobil-component-text04">
            {props.text5}
          </span>
          <Link
            to="/contact-us"
            className="menu-bottom-mobil-component-navlink5 text-2"
          >
            {props.text6}
          </Link>
          <Link
            to="/privacy-policy"
            className="menu-bottom-mobil-component-navlink6 text-2"
          >
            {props.text7}
          </Link>
          <Link
            to="/imprint"
            className="menu-bottom-mobil-component-navlink7 text-2"
          >
            {props.text8}
          </Link>
        </div>
        <div className="menu-bottom-mobil-component-container5">
          <div className="menu-bottom-mobil-component-container6">
            <span className="menu-bottom-mobil-component-text05">
              {props.text9}
            </span>
            <span className="text-2 menu-bottom-mobil-component-text06">
              {props.text10}
            </span>
            <span className="text-2 menu-bottom-mobil-component-text07">
              <span>Up2Data GmbH</span>
              <br></br>
              <span>Prinz-Ludwig-Straße 4</span>
              <br></br>
              <span>80333 München</span>
            </span>
          </div>
          <div className="menu-bottom-mobil-component-container7">
            <span className="text-2">{props.text11}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

MenuBottomMobilComponent.defaultProps = {
  image_src: '/up2datalogo%20(3)1-200h.png',
  image_alt: 'image',
  text4: 'About us',
  text8: 'Imprint',
  text6: 'Contact Us',
  text2: 'Mail Cloud',
  text3: 'Near Cloud',
  text10: 'info@up2data.io',
  text9: 'Contact info',
  text1: 'Home',
  text11: '© 2023 Up2Data. All Rights Reserved',
  text5: 'SUPPORT',
  text7: 'Privacy Policy',
  text: 'EXPLORE',
}

MenuBottomMobilComponent.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text4: PropTypes.string,
  text8: PropTypes.string,
  text6: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text10: PropTypes.string,
  text9: PropTypes.string,
  text1: PropTypes.string,
  text11: PropTypes.string,
  text5: PropTypes.string,
  text7: PropTypes.string,
  text: PropTypes.string,
}

export default MenuBottomMobilComponent
