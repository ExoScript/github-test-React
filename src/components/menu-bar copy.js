import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './menu-bar.css'

const MenuBar = (props) => {
  const [dropdown_menu, setDropdown_menu] = useState(1)
  const [dorpdown, setDorpdown] = useState(false)
  const [menu1, setMenu1] = useState(props.menu1 || false)
  const [menu2, setMenu2] = useState(props.menu2 || false)
  const [menu3, setMenu3] = useState(props.menu3 || false)
  const [menu4, setMenu4] = useState(props.menu4 || false)


  return (
    <div className={`menu-bar-menu-bar ${props.rootClassName} `}>
      <div className="menu-bar-container">
        <div className="menu-bar-container01">
          <div className="menu-bar-container02">
            <Link to="/" className="menu-bar-navlink">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="menu-bar-image"
              />
            </Link>
          </div>
          <div className="menu-bar-container03">
            <Link to="/" className="menu-bar-navlink01">
              <div className={menu1 ? "menu-bar-btn-enable" : "menu-bar-btn-disable"}>
                <span className="">{props.text}</span>
              </div>
            </Link>
            <div
              data-thq="thq-dropdown"
              onMouseEnter={() => setDorpdown(true)}
              onMouseLeave={() => setDorpdown(false)}
              className="menu-bar-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className={menu2 ? "menu-bar-btn-enable" : "menu-bar-btn-disable"}
              >
                <span className="">{props.text31}</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="menu-bar-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="menu-bar-icon">
                    <path d="M426 726v-428l214 214z" className=""></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="menu-bar-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="menu-bar-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="menu-bar-dropdown-toggle1"
                  >
                    <div className="menu-bar-dropdown-menu-box box-shadow">
                      <div className="menu-bar-container05">
                        {dropdown_menu === 1 && (
                          <Link to="/mail-cloud" className="menu-bar-navlink02">
                            <div className="menu-bar-container06 dorpdown-menu-button-enable">
                              <span className="menu-bar-text02 text-2">
                                {props.text9}
                              </span>
                              <span className="menu-bar-text03 text-1">
                                {props.text10}
                              </span>
                            </div>
                          </Link>
                        )}
                        {dropdown_menu === 2 && (
                          <Link to="/mail-cloud" className="menu-bar-navlink03">
                            <div
                              onMouseEnter={() => setDropdown_menu(1)}
                              className="menu-bar-container07 dorpdown-menu-button-disable"
                            >
                              <span className="text-2">{props.text11}</span>
                              <span className="text-1">{props.text12}</span>
                            </div>
                          </Link>
                        )}
                        {dropdown_menu === 2 && (
                          <Link to="/near-cloud" className="menu-bar-navlink04">
                            <div className="menu-bar-container08 dorpdown-menu-button-enable">
                              <span className="text-2">{props.text91}</span>
                              <span className="menu-bar-text07 text-1">
                                {props.text101}
                              </span>
                            </div>
                          </Link>
                        )}
                        {dropdown_menu === 1 && (
                          <Link to="/near-cloud" className="menu-bar-navlink05">
                            <div
                              onMouseEnter={() => setDropdown_menu(2)}
                              className="menu-bar-container09 dorpdown-menu-button-disable"
                            >
                              <span className="menu-bar-text08 text-2">
                                {props.text111}
                              </span>
                              <span className="menu-bar-text09 text-1">
                                {props.text121}
                              </span>
                            </div>
                          </Link>
                        )}
                      </div>
                      <div className="menu-bar-container10"></div>
                      {dropdown_menu === 1 && (
                        <div className="menu-bar-container11">
                          <span className="ueberschrift-2">{props.text7}</span>
                          <span className="text-2">{props.text8}</span>
                          <Link to="/mail-cloud" className="menu-bar-navlink06">
                            <div className="menu-bar-container12 button-lila box-shadow">
                              <span className="text-2">{props.text1311}</span>
                              <svg
                                viewBox="0 0 1024 1024"
                                className="menu-bar-icon2"
                              >
                                <path
                                  d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                                  className=""
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      )}
                      {dropdown_menu === 2 && (
                        <div className="menu-bar-container13">
                          <span className="ueberschrift-2">{props.text71}</span>
                          <span className="text-2">{props.text81}</span>
                          <Link to="/near-cloud" className="menu-bar-navlink07">
                            <div className="menu-bar-container14 button-lila box-shadow">
                              <span className="text-2">{props.text131}</span>
                              <svg
                                viewBox="0 0 1024 1024"
                                className="menu-bar-icon4"
                              >
                                <path
                                  d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                                  className=""
                                ></path>
                              </svg>
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <Link to="/about-us" className="menu-bar-navlink08">
              <div className={menu3 ? "menu-bar-btn-enable" : "menu-bar-btn-disable"}>
                <span className="">{props.text1}</span>
              </div>
            </Link>
            <Link to="/contact-us" className="menu-bar-navlink09">
              <div className={menu4 ? "menu-bar-container16 menu-bar-btn-enable" : "menu-bar-container16 menu-bar-btn-disable"}>
                <span className="">{props.text2}</span>
              </div>
            </Link>
          </div>
          <Link to="/login" className="menu-bar-navlink10">
            <div className="menu-bar-container17">
              <span className="text-2">{props.text6}</span>
              <svg viewBox="0 0 1024 1024" className="menu-bar-icon6">
                <path
                  d="M554 128h342v256h-342v-256zM554 896v-426h342v426h-342zM128 896v-256h342v256h-342zM128 554v-426h342v426h-342z"
                  className=""
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      {dorpdown && <div className="menu-bar-container18"></div>}
    </div>
  )
}

MenuBar.defaultProps = {
  text12: 'Mail Cloud',
  text1: 'About us',
  text2: 'Contact',
  rootClassName: '',
  text9: 'Product - 1',
  text71: 'You might find gold within your CRM contacts - we are the shovel',
  text91: 'Product - 2',
  text6: 'Go to Dashboard',
  text111: 'Product - 2',
  text7: 'Outbound sales is incredible - we help you to scale it',
  text31: 'Products',
  text81:
    '20% of all employees change their job each year. So do also the people that you closed before. Their new job is your new opportunity',
  image_src: '/up2datalogo%20(3)1-200h.png',
  text121: 'Near Cloud',
  text101: 'Near Cloud',
  text10: 'Mail Cloud',
  text1311: 'Get more information',
  text11: 'Product - 1',
  text: 'Home',
  image_alt: 'image',
  text8:
    'You need 3 things to scale - the right ICP, the right Buyer Persona, and a System that automatically sends out Mail Sequences to these people and continuously optimizes the outreach',
  text131: 'Get more information',
}

MenuBar.propTypes = {
  text12: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text9: PropTypes.string,
  text71: PropTypes.string,
  text91: PropTypes.string,
  text6: PropTypes.string,
  text111: PropTypes.string,
  text7: PropTypes.string,
  text31: PropTypes.string,
  text81: PropTypes.string,
  image_src: PropTypes.string,
  text121: PropTypes.string,
  text101: PropTypes.string,
  text10: PropTypes.string,
  text1311: PropTypes.string,
  text11: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  text8: PropTypes.string,
  text131: PropTypes.string,
}

export default MenuBar
