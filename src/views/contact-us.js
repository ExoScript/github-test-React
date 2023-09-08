import React from 'react'

import { Helmet } from 'react-helmet'

import MenuBar from '../components/menu-bar'
import MenuBottomComponent from '../components/menu-bottom-component'
import MenuBarMobil from '../components/menu-bar-mobil'
import SubscribeMobilComponent from '../components/subscribe-mobil-component'
import MenuBottomMobilComponent from '../components/menu-bottom-mobil-component'
import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <Helmet>
        <title>Contact-us - Up2Data</title>
        <meta property="og:title" content="Contact-us - Up2Data" />
      </Helmet>
      <div className="contact-us-web">
        <div className="contact-us-container01">
          <MenuBar rootClassName="menu-bar-root-class-name"></MenuBar>
          <div className="contact-us-container02">
            <div className="contact-us-container03">
              <div className="contact-us-container04">
                <div className="contact-us-container05">
                  <div className="contact-us-container06">
                    <span className="contact-us-text text-2">Contact us</span>
                  </div>
                  <span className="contact-us-text01 titel-1">
                    We are happy to discuss your growth with you!
                  </span>
                </div>
                <span className="contact-us-text02 text-2">
                  Feel free to reach out to us through our Contact Us form.
                  Whether you have questions, suggestions, or feedback, we value
                  your input and are here to assist you.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-container07">
          <span className="contact-us-text03 text-2">
            Our platform interacts with the CRMs that see the highest usage
            rates, ensuring optimal engagement.
          </span>
          <div className="contact-us-container08">
            <span className="contact-us-text04 titel-2">ClickUp</span>
            <span className="contact-us-text05 titel-2">HubSpot</span>
            <span className="contact-us-text06 titel-2">monday</span>
            <span className="contact-us-text07 titel-2">Freshsales</span>
            <span className="contact-us-text08 titel-2">salesforce</span>
            <span className="contact-us-text09 titel-2">Less Annoying CRM</span>
            <span className="contact-us-text10 titel-2">Zendesk</span>
            <span className="contact-us-text11 titel-2">Active Campaign</span>
          </div>
        </div>
        <div className="contact-us-container09"></div>
        <div className="contact-us-container10">
          <div className="contact-us-container11">
            <div className="contact-us-container12">
              <div className="contact-us-container13">
                <span className="titel-1">Get In Touch With Us</span>
                <span className="text-2">
                  <span>
                    Send a message via the form and we will get back to you as
                    soon as possible.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="contact-us-container14">
                <div className="contact-us-container15">
                  <div className="contact-us-container16 gradient">
                    <svg viewBox="0 0 1024 1024" className="contact-us-icon">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                  </div>
                  <div className="contact-us-container17">
                    <span className="contact-us-text16 text-2">
                      E-mail Address
                    </span>
                    <span className="ueberschrift-2">info@up2data.io</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-us-container18">
              <div className="contact-us-container19">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="contact-us-textinput input"
                />
              </div>
              <div className="contact-us-container20">
                <input
                  type="text"
                  placeholder="E-mail address"
                  className="contact-us-textinput1 input"
                />
              </div>
              <div className="contact-us-container21">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="contact-us-textinput2 input"
                />
              </div>
              <div className="contact-us-container22">
                <input
                  type="text"
                  placeholder="Type Your Message Here"
                  className="contact-us-textinput3 input"
                />
              </div>
              <div className="contact-us-container23 gradient box-shadow">
                <span className="contact-us-text18">Send Message</span>
                <svg viewBox="0 0 1024 1024" className="contact-us-icon2">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <MenuBottomComponent rootClassName="menu-bottom-component-root-class-name1"></MenuBottomComponent>
      </div>
      <div className="contact-us-mobil">
        <div className="contact-us-container24">
          <MenuBarMobil></MenuBarMobil>
        </div>
        <div className="contact-us-top">
          <div className="contact-us-container25">
            <div className="contact-us-container26">
              <div className="contact-us-container27">
                <div className="contact-us-container28">
                  <span className="contact-us-text19 text-2">Contact us</span>
                </div>
                <div className="contact-us-container29">
                  <span className="contact-us-text20 titel-2-mobil">
                    We are happy to discuss your growth with you!
                  </span>
                  <span className="text-1-mobil contact-us-text21">
                    Feel free to reach out to us through our Contact Us form.
                    Whether you have questions, suggestions, or feedback, we
                    value your input and are here to assist you.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-content gradient2">
          <div className="contact-us-container30"></div>
          <div className="contact-us-container31 border-b">
            <div className="contact-us-container32">
              <span className="contact-us-text22 titel-2-mobil">
                Get In Touch With Us
              </span>
              <span className="contact-us-text23 text-1">
                Send a message via the form and we will get back to you as soon
                as possible.
              </span>
            </div>
            <div className="contact-us-container33">
              <div className="contact-us-container34">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="contact-us-textinput4 input"
                />
              </div>
              <div className="contact-us-container35">
                <input
                  type="text"
                  placeholder="E-mail address"
                  className="contact-us-textinput5 input"
                />
              </div>
              <div className="contact-us-container36">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="contact-us-textinput6 input"
                />
              </div>
              <div className="contact-us-container37">
                <input
                  type="text"
                  placeholder="Type Your Message Here"
                  className="contact-us-textinput7 input"
                />
              </div>
              <div className="contact-us-container38 gradient box-shadow">
                <span className="contact-us-text24">Send Message</span>
                <svg viewBox="0 0 1024 1024" className="contact-us-icon4">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <SubscribeMobilComponent></SubscribeMobilComponent>
        <MenuBottomMobilComponent></MenuBottomMobilComponent>
      </div>
    </div>
  )
}

export default ContactUs
