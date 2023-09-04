import React from 'react'

import { Helmet } from 'react-helmet'

import MenuBar from '../components/menu-bar'
import MenuBottomComponent from '../components/menu-bottom-component'
import './privacy-policy.css'

const PrivacyPolicy = (props) => {
  return (
    <div className="privacy-policy-container">
      <Helmet>
        <title>Privacy-policy - Up2Data</title>
        <meta property="og:title" content="Privacy-policy - Up2Data" />
      </Helmet>
      <div className="privacy-policy-container01">
        <div className="privacy-policy-container02">
          <MenuBar rootClassName="menu-bar-root-class-name1"></MenuBar>
          <div className="privacy-policy-container03">
            <div className="privacy-policy-container04">
              <div className="privacy-policy-container05">
                <div className="privacy-policy-container06">
                  <div className="privacy-policy-container07">
                    <span className="text-2">Privacy-Policy</span>
                  </div>
                  <span className="privacy-policy-text01 titel-1">
                    Guarding Your Information: Unveiling Our Privacy Policy
                  </span>
                </div>
                <span className="privacy-policy-text02 text-2">
                  Empowering Your Data Control: A Thorough Examination of Our
                  Privacy Policy and How It Puts You in Charge
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="privacy-policy-container08">
          <div className="privacy-policy-container09"></div>
        </div>
        <div className="privacy-policy-container10">
          <div className="privacy-policy-container11">
            <div className="privacy-policy-container12">
              <span className="titel-2">Subscribe Our Newsletter</span>
              <span className="privacy-policy-text04 text-1">
                <span>
                  Enter your details to get business inspiration, trending
                  solutions,
                </span>
                <br></br>
                <span>and consulting tips delivered to your inbox</span>
              </span>
            </div>
            <div className="privacy-policy-container13">
              <div className="privacy-policy-container14">
                <span className="privacy-policy-text08">Enter your email</span>
              </div>
              <div className="privacy-policy-container15">
                <span className="privacy-policy-text09">Subscribe</span>
                <svg viewBox="0 0 1024 1024" className="privacy-policy-icon">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <MenuBottomComponent rootClassName="menu-bottom-component-root-class-name3"></MenuBottomComponent>
      </div>
    </div>
  )
}

export default PrivacyPolicy
