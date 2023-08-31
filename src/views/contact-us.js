import React from 'react'

import { Helmet } from 'react-helmet'

import MenuBar from '../components/menu-bar'
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
                <span className="contact-us-text01">
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
                    <svg viewBox="0 0 1024 1024" className="contact-us-icon02">
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
                    <svg viewBox="0 0 1024 1024" className="contact-us-icon04">
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
                <svg viewBox="0 0 1024 1024" className="contact-us-icon06">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-container33">
          <div className="contact-us-container34">
            <div className="contact-us-container35">
              <div className="contact-us-container36">
                <div className="contact-us-container37"></div>
                <span className="contact-us-text23">
                  <span>Drive Sales by thinking</span>
                  <br></br>
                  <span>outside the box</span>
                </span>
              </div>
              <div className="contact-us-container38">
                <span>FOLLOW US</span>
                <div className="contact-us-container39">
                  <div className="contact-us-container40">
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="contact-us-icon08"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                  <div className="contact-us-container41">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="contact-us-icon10"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                  <div className="contact-us-container42">
                    <svg viewBox="0 0 1024 1024" className="contact-us-icon12">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                  <div className="contact-us-container43">
                    <svg viewBox="0 0 1024 1024" className="contact-us-icon14">
                      <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                      <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                      <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-us-container44">
              <div className="contact-us-container45">
                <span className="contact-us-text28">EXPLORE</span>
                <span className="contact-us-text29">Home</span>
                <span className="contact-us-text30">About Us</span>
                <span className="contact-us-text31">Service</span>
                <span className="contact-us-text32">Product</span>
                <span className="contact-us-text33">Pricing</span>
                <span className="contact-us-text34">Resources</span>
              </div>
              <div className="contact-us-container46">
                <span className="contact-us-text35">SUPPORT</span>
                <span className="contact-us-text36">Help</span>
                <span className="contact-us-text37">Contact Us</span>
                <span className="contact-us-text38">Careers</span>
                <span className="contact-us-text39">Terms Of Service</span>
                <span className="contact-us-text40">Refund Policy</span>
                <span className="contact-us-text41">Partners</span>
              </div>
              <div className="contact-us-container47">
                <span className="contact-us-text42">Contact info</span>
                <span className="contact-us-text43">
                  <span>(702) 555-0122</span>
                  <br></br>
                  <span>(702) 555-0122</span>
                </span>
                <span className="contact-us-text47">Up2Data@example.com</span>
                <span className="contact-us-text48">
                  <span>3891 Ranchview Dr. Richardson,</span>
                  <br></br>
                  <span>California 62639</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-container48">
          <div className="contact-us-container49">
            <span>© 2023 Up2Data. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
