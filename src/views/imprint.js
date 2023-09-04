import React from 'react'

import { Helmet } from 'react-helmet'

import MenuBar from '../components/menu-bar'
import MenuBottomComponent from '../components/menu-bottom-component'
import './imprint.css'

const Imprint = (props) => {
  return (
    <div className="imprint-container">
      <Helmet>
        <title>Imprint - Up2Data</title>
        <meta property="og:title" content="Imprint - Up2Data" />
      </Helmet>
      <div className="imprint-container01">
        <div className="imprint-container02">
          <MenuBar rootClassName="menu-bar-root-class-name2"></MenuBar>
          <div className="imprint-container03">
            <div className="imprint-container04">
              <div className="imprint-container05">
                <div className="imprint-container06">
                  <div className="imprint-container07">
                    <span className="text-2">Imprint</span>
                  </div>
                  <span className="imprint-text01 titel-1">
                    Guarding Your Information: Unveiling Our Privacy Policy
                  </span>
                </div>
                <span className="imprint-text02 text-2">
                  Empowering Your Data Control: A Thorough Examination of Our
                  Privacy Policy and How It Puts You in Charge
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="imprint-container08">
          <div className="imprint-container09"></div>
        </div>
        <div className="imprint-container10">
          <div className="imprint-container11">
            <div className="imprint-container12">
              <span className="titel-2">Subscribe Our Newsletter</span>
              <span className="imprint-text04 text-1">
                <span>
                  Enter your details to get business inspiration, trending
                  solutions,
                </span>
                <br></br>
                <span>and consulting tips delivered to your inbox</span>
              </span>
            </div>
            <div className="imprint-container13">
              <div className="imprint-container14">
                <span className="imprint-text08">Enter your email</span>
              </div>
              <div className="imprint-container15">
                <span className="imprint-text09">Subscribe</span>
                <svg viewBox="0 0 1024 1024" className="imprint-icon">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <MenuBottomComponent rootClassName="menu-bottom-component-root-class-name6"></MenuBottomComponent>
      </div>
    </div>
  )
}

export default Imprint
