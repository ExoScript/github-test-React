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
                    <span className="imprint-text text-2">Imprint</span>
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
        <div className="imprint-container08"></div>
        <div className="imprint-container09">
          <div className="imprint-container10">
            <span className="imprint-text03 titel-1">Impressum</span>
            <span className="imprint-text04 ueberschrift-1">
              Angaben gemäß § 5 TMG
            </span>
            <span className="imprint-text05">
              <span>Up2data GmbH</span>
              <br></br>
              <span>Prinz-Ludwig-Straße 4</span>
              <br></br>
              <span>80333 München</span>
            </span>
            <span className="imprint-text11">
              <span>Handelsregister: HRB284016</span>
              <br></br>
              <span>Registergericht: München</span>
            </span>
            <span className="imprint-text15">
              <span className="imprint-text16">Vertreten durch:</span>
              <br></br>
              <span>Daniel Donhasuer</span>
            </span>
            <span className="imprint-text19 ueberschrift-2">Kontakt</span>
            <span className="imprint-text20">E-Mail: info@email.de</span>
            <span className="imprint-text21 ueberschrift-1">
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </span>
            <span className="imprint-text22">
              <span>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
              </span>
              <br></br>
              <span>Verbraucherschlichtungsstelle teilzunehmen.</span>
            </span>
          </div>
        </div>
        <div className="imprint-container11">
          <div className="imprint-container12">
            <div className="imprint-container13">
              <span className="titel-2">Subscribe Our Newsletter</span>
              <span className="imprint-text27 text-1">
                <span>
                  Enter your details to get business inspiration, trending
                  solutions,
                </span>
                <br></br>
                <span>and consulting tips delivered to your inbox</span>
              </span>
            </div>
            <div className="imprint-container14">
              <div className="imprint-container15">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="imprint-textinput input"
                />
              </div>
              <div className="imprint-container16">
                <span className="imprint-text31">Subscribe</span>
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
