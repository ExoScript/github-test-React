import React from 'react'

import { Helmet } from 'react-helmet'

import MenuBar from '../components/menu-bar'
import MenuBottomComponent from '../components/menu-bottom-component'
import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <Helmet>
        <title>Contact-us - Up2Data</title>
        <meta property="og:title" content="Contact-us - Up2Data" />
      </Helmet>
      <div className="contact-us-container01">
        <div className="contact-us-container02">
          <MenuBar></MenuBar>
          <div className="contact-us-container03">
            <div className="contact-us-container04">
              <div className="contact-us-container05">
                <span className="contact-us-text titel-1">
                  We are happy to discuss your growth with you!
                </span>
                <span className="contact-us-text01 text-1">
                  Feel free to reach out to us through our Contact Us form.
                  Whether you have questions, suggestions, or feedback, we value
                  your input and are here to assist you.
                </span>
              </div>
              <div className="contact-us-container06">
                <div className="contact-us-container07">
                  <div className="contact-us-container08">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="contact-us-textinput input"
                    />
                  </div>
                  <div className="contact-us-container09 gradient">
                    <span>Start free trail</span>
                  </div>
                </div>
                <span className="contact-us-text03">
                  30 day free trial - No credit card required
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-container10">
          <div className="contact-us-container11">
            <span className="contact-us-text04">
              Our platform interacts with the CRMs that see the highest usage
              rates, ensuring optimal engagement.
            </span>
            <div className="contact-us-container12">
              <span className="contact-us-text05 titel-2">ClickUp</span>
              <span className="contact-us-text06 titel-2">HubSpot</span>
              <span className="contact-us-text07 titel-2">monday</span>
              <span className="contact-us-text08 titel-2">Freshsales</span>
              <span className="contact-us-text09 titel-2">salesforce</span>
              <span className="contact-us-text10 titel-2">
                Less Annoying CRM
              </span>
              <span className="contact-us-text11 titel-2">Zendesk</span>
              <span className="contact-us-text12 titel-2">Active Campaign</span>
            </div>
          </div>
        </div>
        <div className="contact-us-container13">
          <div className="contact-us-container14">
            <div className="contact-us-container15">
              <div className="contact-us-container16">
                <span className="titel-2">Get In Touch With Us</span>
                <span className="text-1">
                  <span>
                    Send a message via the form and we will get back to you as
                    soon as possible.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="contact-us-container17">
                <div className="contact-us-container18">
                  <div className="contact-us-container19">
                    <svg viewBox="0 0 1024 1024" className="contact-us-icon">
                      <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                    </svg>
                  </div>
                  <div className="contact-us-container20">
                    <span className="text-2">Phone Number</span>
                    <span className="ueberschrift-2">(702) 555-0122</span>
                  </div>
                </div>
                <div className="contact-us-container21">
                  <div className="contact-us-container22">
                    <svg viewBox="0 0 1024 1024" className="contact-us-icon2">
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                  </div>
                  <div className="contact-us-container23">
                    <span className="text-2">E-mail Address</span>
                    <span className="ueberschrift-2">support@up2data.io</span>
                  </div>
                </div>
                <div className="contact-us-container24">
                  <div className="contact-us-container25">
                    <svg viewBox="0 0 1024 1024" className="contact-us-icon4">
                      <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                    </svg>
                  </div>
                  <div className="contact-us-container26">
                    <span className="ueberschrift-2">
                      3891 Ranchview Dr. Richardson, California 62639
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-us-container27">
              <div className="contact-us-container28">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="contact-us-textinput1 input"
                />
              </div>
              <div className="contact-us-container29">
                <input
                  type="text"
                  placeholder="E-mail address"
                  className="contact-us-textinput2 input"
                />
              </div>
              <div className="contact-us-container30">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="contact-us-textinput3 input"
                />
              </div>
              <div className="contact-us-container31">
                <input
                  type="text"
                  placeholder="Type Your Message Here"
                  className="contact-us-textinput4 input"
                />
              </div>
              <div className="contact-us-container32">
                <span className="contact-us-text22">Send Message</span>
                <svg viewBox="0 0 1024 1024" className="contact-us-icon6">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <MenuBottomComponent rootClassName="menu-bottom-component-root-class-name1"></MenuBottomComponent>
      </div>
    </div>
  )
}

export default ContactUs
