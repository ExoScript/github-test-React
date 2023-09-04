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
              <span className="ueberschrift-2">{props.text1}</span>
              <div className="menu-bottom-component-container06">
                <div className="menu-bottom-component-container07">
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="menu-bottom-component-icon"
                  >
                    <path
                      d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="menu-bottom-component-container08">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="menu-bottom-component-icon02"
                  >
                    <path
                      d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="menu-bottom-component-container09">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="menu-bottom-component-icon04"
                  >
                    <path
                      d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="menu-bottom-component-container10">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="menu-bottom-component-icon06"
                  >
                    <path
                      d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"
                      className=""
                    ></path>
                    <path
                      d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"
                      className=""
                    ></path>
                    <path
                      d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-bottom-component-container11">
            <div className="menu-bottom-component-container12">
              <span className="ueberschrift-2">{props.text2}</span>
              <Link to="/" className="menu-bottom-component-navlink1 text-2">
                {props.text3}
              </Link>
              <Link
                to="/product-1"
                className="menu-bottom-component-navlink2 text-2"
              >
                {props.text4}
              </Link>
              <Link
                to="/product-22"
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
            <div className="menu-bottom-component-container13">
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
            <div className="menu-bottom-component-container14">
              <span className="ueberschrift-2">{props.text16}</span>
              <span className="text-2">
                <span className="">(702) 555-0122</span>
                <br className=""></br>
                <span className="">(702) 555-0122</span>
              </span>
              <span className="text-2">{props.text17}</span>
              <span className="text-2">
                <span className="">3891 Ranchview Dr. Richardson,</span>
                <br className=""></br>
                <span className="">California 62639</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-bottom-component-container15">
        <div className="menu-bottom-component-container16">
          <span className="text-2">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

MenuBottomComponent.defaultProps = {
  text5: 'Product - 2',
  text9: 'SUPPORT',
  text3: 'Home',
  text15: 'Partners',
  text6: 'About us',
  text4: 'Product - 1',
  text14: 'Refund Policy',
  rootClassName: '',
  text12: 'Privacy Policy',
  image_alt: 'image',
  text13: 'Imprint',
  text16: 'Contact info',
  text17: 'Up2Data@example.com',
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
  text15: PropTypes.string,
  text6: PropTypes.string,
  text4: PropTypes.string,
  text14: PropTypes.string,
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
