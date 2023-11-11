import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import MenuBar from '../components/menu-bar'
import MenuBottomComponent from '../components/menu-bottom-component'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Traffls</title>
        <meta property="og:title" content="Login - Traffls" />
      </Helmet>
      <div className="login-container01">
        <div className="login-container02">
          <MenuBar></MenuBar>
          <div className="login-container03">
            <div className="login-container04">
              <div className="login-container05">
                <span className="login-text ueberschrift-1">Log In</span>
                <span className="text-2">Please enter your details</span>
              </div>
              <div className="login-container06">
                <div className="login-container07">
                  <span className="login-text2 text-2">Cliend-ID:</span>
                  <div className="login-container08">
                    <input
                      type="text"
                      placeholder="Enter your Client-ID"
                      className="login-textinput input"
                    />
                  </div>
                </div>
                <div className="login-container09">
                  <span className="login-text3 text-2">Secret-Key:</span>
                  <div className="login-container10">
                    <input
                      type="text"
                      placeholder="Enter your Secret-Key"
                      className="login-textinput1 input"
                    />
                  </div>
                </div>
                <div className="login-container11">
                  <div className="login-container12">
                    <div className="login-container13"></div>
                    <span className="text-2">Stay Logged in</span>
                  </div>
                  <span className="login-text5 text-2">Forget Secret-Key?</span>
                </div>
              </div>
              <div className="login-container14">
                <Link to="/dashboard" className="login-navlink">
                  <div className="login-container15">
                    <span className="text-2">Login</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <MenuBottomComponent></MenuBottomComponent>
      </div>
    </div>
  )
}

export default Login
