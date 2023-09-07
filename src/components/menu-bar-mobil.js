import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './menu-bar-mobil.css'

const MenuBarMobil = (props) => {
  const [menu, setMenu] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="menu-bar-mobil-menu-bar-mobil">
      <div className="menu-bar-mobil-container gradient">
        <Link to="/about-us" className="menu-bar-mobil-navlink">
          <div className="menu-bar-mobil-container01">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="menu-bar-mobil-image"
            />
          </div>
        </Link>
        <span className="ueberschrift-2">
          <span>Up2</span>
          <span className="menu-bar-mobil-text02">Data</span>
        </span>
        {!isVisible && (
          <svg
            viewBox="0 0 1024 1024"
            onClick={() => setIsVisible(true)}
            className="menu-bar-mobil-icon"
          >
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        )}
        {isVisible && (
          <svg
            viewBox="0 0 1024 1024"
            onClick={() => setIsVisible(false)}
            className="menu-bar-mobil-icon2"
          >
            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
          </svg>
        )}
      </div>
      {isVisible && (
        <div className="menu-bar-mobil-container02 border-b">
          <span className="menu-bar-mobil-text03">MENU</span>
          <div className="menu-bar-mobil-container03">
            <Link to="/" className="menu-bar-mobil-navlink1">
              <div className="menu-bar-mobil-container04">
                {menu === 0 && (
                  <div className="menu-bar-mobil-container05 gradient">
                    <span>Home</span>
                  </div>
                )}
                <div className="menu-bar-mobil-container06">
                  <span className="menu-bar-mobil-text05">Home</span>
                </div>
              </div>
            </Link>
            <Link to="/mail-cloud" className="menu-bar-mobil-navlink2">
              <div className="menu-bar-mobil-container07">
                {menu === 1 && (
                  <div className="menu-bar-mobil-container08 gradient">
                    <span>Mail Cloud</span>
                  </div>
                )}
                <div className="menu-bar-mobil-container09">
                  <span className="menu-bar-mobil-text07">Mail Cloud</span>
                </div>
              </div>
            </Link>
            <Link to="/near-cloud" className="menu-bar-mobil-navlink3">
              <div className="menu-bar-mobil-container10">
                {menu === 2 && (
                  <div className="menu-bar-mobil-container11 gradient">
                    <span>Near Cloud</span>
                  </div>
                )}
                <div className="menu-bar-mobil-container12">
                  <span className="menu-bar-mobil-text09">Near Cloud</span>
                </div>
              </div>
            </Link>
            <Link to="/about-us" className="menu-bar-mobil-navlink4">
              <div className="menu-bar-mobil-container13">
                {menu === 3 && (
                  <div className="menu-bar-mobil-container14 gradient">
                    <span>About us</span>
                  </div>
                )}
                <div className="menu-bar-mobil-container15">
                  <span className="menu-bar-mobil-text11">About us</span>
                </div>
              </div>
            </Link>
            <Link to="/contact-us" className="menu-bar-mobil-navlink5">
              <div className="menu-bar-mobil-container16">
                {menu === 4 && (
                  <div className="menu-bar-mobil-container17 gradient">
                    <span>Contact</span>
                  </div>
                )}
                <div className="menu-bar-mobil-container18">
                  <span className="menu-bar-mobil-text13">Contact</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

MenuBarMobil.defaultProps = {
  image_src: '/up2datalogo%20(3)1-200h.png',
  image_alt: 'image',
}

MenuBarMobil.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default MenuBarMobil
