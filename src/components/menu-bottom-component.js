import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './menu-bottom-component.css'

const MenuBottomComponent = (props) => {
  return (
    <div
      className={`menu-bottom-component-menu-bottom-component ${props.rootClassName} `}
    >
      <div className="menu-bottom-component-container">
        <div className="menu-bottom-component-container01">
          <div className="menu-bottom-component-container02">
            <div className="menu-bottom-component-container03">
              <div className="menu-bottom-component-container04">
                <Link to="/" className="menu-bottom-component-navlink">
                  <img
                    alt={props.image_alt}
                    src={props.image_src}
                    className="menu-bottom-component-image"
                  />
                </Link>
              </div>
              <span className="text-2">
                <span className="">Drive Sales by thinking</span>
                <br className=""></br>
                <span className="">outside the box</span>
              </span>
            </div>
            <div className="menu-bottom-component-container05">
              <span className="ueberschrift-3 text-1">{props.text1}</span>
              <div className="menu-bottom-component-container06">
                <div className="menu-bottom-component-container07">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="menu-bottom-component-icon"
                  >
                    <path
                      d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-bottom-component-container08">
            <div className="menu-bottom-component-container09">
              <span className="ueberschrift-2">{props.text2}</span>
              <Link to="/" className="menu-bottom-component-navlink1 text-2">
                {props.text3}
              </Link>
              <Link
                to="/mail-cloud"
                className="menu-bottom-component-navlink2 text-2"
              >
                {props.text4}
              </Link>
              <Link
                to="/near-cloud"
                className="menu-bottom-component-navlink3 text-2"
              >
                {props.text5}
              </Link>
              <Link
                to="/about-us"
                className="menu-bottom-component-navlink4 text-2"
              >
                {props.text6}
              </Link>
            </div>
            <div className="menu-bottom-component-container10">
              <span className="ueberschrift-2">{props.text9}</span>
              <Link
                to="/contact-us"
                className="menu-bottom-component-navlink5 text-2"
              >
                {props.text11}
              </Link>
              <Link
                to="/privacy-policy"
                className="menu-bottom-component-navlink6 text-2"
              >
                {props.text12}
              </Link>
              <Link
                to="/imprint"
                className="menu-bottom-component-navlink7 text-2"
              >
                {props.text13}
              </Link>
            </div>
            <div className="menu-bottom-component-container11">
              <span className="ueberschrift-2">{props.text16}</span>
              <span className="text-2">{props.text17}</span>
              <span className="text-2">
                <span className="">Up2Data1 GmbH</span>
                <br className=""></br>
                <span className="">Prinz-Ludwig-Straße 4</span>
                <br className=""></br>
                <span className="">80333 München</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-bottom-component-container12">
        <div className="menu-bottom-component-container13">
          <span className="text-2">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

MenuBottomComponent.defaultProps = {
  text5: 'Near Cloud',
  text9: 'SUPPORT',
  text3: 'Home',
  text6: 'About us',
  text4: 'Mail Cloud',
  rootClassName: '',
  text12: 'Privacy Policy',
  image_alt: 'image',
  text13: 'Imprint',
  text16: 'Contact info',
  text17: 'info@up2data.io',
  text: '© 2023 Up2Data. All Rights Reserved',
  text2: 'EXPLORE',
  text1: 'FOLLOW US',
  image_src: '/up2datalogo%20(3)1-200h.png',
  text11: 'Contact Us',
}

MenuBottomComponent.propTypes = {
  text5: PropTypes.string,
  text9: PropTypes.string,
  text3: PropTypes.string,
  text6: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text12: PropTypes.string,
  image_alt: PropTypes.string,
  text13: PropTypes.string,
  text16: PropTypes.string,
  text17: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  text11: PropTypes.string,
}

export default MenuBottomComponent
