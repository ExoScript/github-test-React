import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import MenuBar from '../components/menu-bar'
import ContactUsMiniFormComponent from '../components/contact-us-mini-form-component'
import MenuBottomComponent from '../components/menu-bottom-component'
import MenuBarMobil from '../components/menu-bar-mobil'
import SubscribeMobilComponent from '../components/subscribe-mobil-component'
import MenuBottomMobilComponent from '../components/menu-bottom-mobil-component'
import './near-cloud.css'

const NearCloud = (props) => {
  return (
    <div className="near-cloud-container">
      <Helmet>
        <title>Near-Cloud - Up2Data</title>
        <meta property="og:title" content="Near-Cloud - Up2Data" />
      </Helmet>
      <div className="near-cloud-web">
        <div className="near-cloud-container001">
          <MenuBar menu2={true}></MenuBar>
          <div className="near-cloud-container002">
            <div className="near-cloud-container003">
              <div className="near-cloud-container004">
                <span className="near-cloud-text text-2">Near Cloud</span>
              </div>
              <span className="near-cloud-text001 titel-1">
                You might find gold within your CRM contacts - we are the shovel
              </span>
              <span className="near-cloud-text002 text-2">
                20% of all employees change their job each year. So do also the
                people that you closed before. Their new job is your new
                opportunity
              </span>
            </div>
            <div className="near-cloud-container005">
              <ContactUsMiniFormComponent></ContactUsMiniFormComponent>
            </div>
          </div>
        </div>
        <div className="near-cloud-container006">
          <div className="near-cloud-container007"></div>
          <span className="near-cloud-text003 text-2">
            Our platform interacts with the CRMs that see the highest usage
            rates, ensuring optimal engagement.
          </span>
          <div className="near-cloud-container008">
            <span className="near-cloud-text004 titel-2">ClickUp</span>
            <span className="near-cloud-text005 titel-2">HubSpot</span>
            <span className="near-cloud-text006 titel-2">monday</span>
            <span className="near-cloud-text007 titel-2">Freshsales</span>
            <span className="near-cloud-text008 titel-2">salesforce</span>
            <span className="near-cloud-text009 titel-2">
              Less Annoying CRM
            </span>
            <span className="near-cloud-text010 titel-2">Zendesk</span>
            <span className="near-cloud-text011 titel-2">Active Campaign</span>
          </div>
        </div>
        <div className="near-cloud-container009 border-b">
          <div className="near-cloud-container010">
            <div className="near-cloud-container011">
              <div className="near-cloud-container012">
                <span className="near-cloud-text012 sub-titel-1">
                  - Our Product
                </span>
                <span className="titel-2">
                  Is your CRM up2date? No? Then you are missing out!
                </span>
                <span className="text-1">
                  <span>
                    Many of your hard earned contacts changed their job. But
                    this is also a valuable chance fo new sales
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="near-cloud-container013">
                <div className="near-cloud-container014">
                  <div className="near-cloud-container015">
                    <svg viewBox="0 0 1024 1024" className="near-cloud-icon">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Tracking of Buyer Personas
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="near-cloud-container016">
                  <div className="near-cloud-container017">
                    <svg viewBox="0 0 1024 1024" className="near-cloud-icon02">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Automated updates regarding their career
                  </span>
                </div>
                <div className="near-cloud-container018">
                  <div className="near-cloud-container019">
                    <svg viewBox="0 0 1024 1024" className="near-cloud-icon04">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">Works with every CRM</span>
                </div>
                <div className="near-cloud-container020">
                  <div className="near-cloud-container021">
                    <svg viewBox="0 0 1024 1024" className="near-cloud-icon06">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Continuous Expert Support
                  </span>
                </div>
              </div>
              <Link to="/contact-us" className="near-cloud-navlink">
                <div className="near-cloud-button-blue button-blue">
                  <span className="text-1">Get Started</span>
                  <svg viewBox="0 0 1024 1024" className="near-cloud-icon08">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="near-cloud-container022">
              <img alt="image" src="/img_2.svg" className="near-cloud-image" />
            </div>
          </div>
        </div>
        <div className="near-cloud-container023 border-b">
          <div className="near-cloud-container024">
            <div className="near-cloud-container025">
              <span className="near-cloud-text022 sub-titel-1">
                - Our advantages
              </span>
              <span className="titel-2">
                The more customers you have, the higher the need to track them
                closely
              </span>
            </div>
            <Link to="/contact-us" className="near-cloud-navlink1">
              <div className="near-cloud-button-blue1 button-blue">
                <span className="text-1">Get Started</span>
                <svg viewBox="0 0 1024 1024" className="near-cloud-icon10">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </Link>
            <div className="near-cloud-container026">
              <div className="near-cloud-container027">
                <img
                  alt="image"
                  src="/img_6.svg"
                  className="near-cloud-image01"
                />
                <div className="near-cloud-container028">
                  <span className="ueberschrift-2">
                    After a fast onboarding your customers will be tracked
                    automatically forever
                  </span>
                  <span className="text-1">
                    <span>
                      Many of your hard earned contacts changed their job. But
                      this is also a valuable chance fo new sales
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
              <div className="near-cloud-container029">
                <img
                  alt="image"
                  src="/img_7.svg"
                  className="near-cloud-image02"
                />
                <div className="near-cloud-container030">
                  <span className="ueberschrift-2">
                    All resulting job changes of your tracked profiles will be
                    send directly to you
                  </span>
                  <span className="text-1">
                    Your sales people will thank you for those deals, as they
                    almost feel like a gift. Next to referral deals these might
                    be the highest converting leads
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="near-cloud-container031 border-b">
          <div className="near-cloud-container032">
            <div className="near-cloud-container033">
              <span className="titel-2">
                Learn about our company success stories
              </span>
              <span className="near-cloud-text032 text-1">
                Start your sales journey today to get the most out of your
                efforts
              </span>
            </div>
            <div className="near-cloud-container034">
              <div className="near-cloud-container035">
                <div className="near-cloud-container036">
                  <div className="near-cloud-container037">
                    <div className="near-cloud-container038">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="near-cloud-image03"
                      />
                      <span className="near-cloud-text033">10K+</span>
                    </div>
                  </div>
                  <span className="near-cloud-text034">Sales Calls</span>
                </div>
                <div className="near-cloud-container039"></div>
                <div className="near-cloud-container040">
                  <div className="near-cloud-container041">
                    <div className="near-cloud-container042">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="near-cloud-image04"
                      />
                      <span className="near-cloud-text035">125K+</span>
                    </div>
                  </div>
                  <span className="near-cloud-text036">Data enriched</span>
                </div>
                <div className="near-cloud-container043"></div>
                <div className="near-cloud-container044">
                  <div className="near-cloud-container045">
                    <div className="near-cloud-container046">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="near-cloud-image05"
                      />
                      <span className="near-cloud-text037">15+</span>
                    </div>
                  </div>
                  <span className="near-cloud-text038">Years Experience</span>
                </div>
                <div className="near-cloud-container047"></div>
                <div className="near-cloud-container048">
                  <div className="near-cloud-container049">
                    <div className="near-cloud-container050">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="near-cloud-image06"
                      />
                      <span className="near-cloud-text039">8+</span>
                    </div>
                  </div>
                  <span className="near-cloud-text040">ROI on average</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="near-cloud-container051">
          <div className="near-cloud-container052">
            <div className="near-cloud-container053">
              <div className="near-cloud-container054">
                <img
                  alt="image"
                  src="/img_8.svg"
                  className="near-cloud-image07"
                />
              </div>
              <div className="near-cloud-container055">
                <span className="near-cloud-text041 sub-titel-1">
                  - Our features
                </span>
                <span className="titel-2">
                  Our tool scales with you as you grow
                </span>
                <span className="near-cloud-text043 text-1">
                  <span>
                    Even if you have a small number of customers yet, you are
                    always free to start, as each tracked contact only costs 10
                    cents per month
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div className="near-cloud-container056">
                  <div className="near-cloud-container057">
                    <svg viewBox="0 0 1024 1024" className="near-cloud-icon12">
                      <path d="M554 128h342v256h-342v-256zM554 896v-426h342v426h-342zM128 896v-256h342v256h-342zM128 554v-426h342v426h-342z"></path>
                    </svg>
                  </div>
                  <div className="near-cloud-container058">
                    <span className="ueberschrift-3">
                      Additional channel for Leads
                    </span>
                    <span className="text-2">
                      Getting the most out of your Sales department by having
                      the right tools at the right time
                    </span>
                  </div>
                </div>
                <div className="near-cloud-container059">
                  <div className="near-cloud-container060">
                    <svg viewBox="0 0 1024 1024" className="near-cloud-icon14">
                      <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                    </svg>
                  </div>
                  <div className="near-cloud-container061">
                    <span className="ueberschrift-3">
                      High Scalability, low entry
                    </span>
                    <span className="text-2">
                      Getting the most out of your Sales department by having
                      the right tools at the right time
                    </span>
                  </div>
                </div>
                <div className="near-cloud-container062">
                  <div className="near-cloud-container063">
                    <svg viewBox="0 0 1024 1024" className="near-cloud-icon16">
                      <path d="M512 128q160 0 272 112t112 272-112 272-272 112q-54 0-122-23t-112-57l60-60q76 54 174 54 124 0 211-87t87-211-87-211-211-87-211 87-87 211h128l-172 170-170-170h128q0-160 112-272t272-112zM598 512q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                    </svg>
                  </div>
                  <div className="near-cloud-container064">
                    <span className="ueberschrift-3">
                      Highest conversion rates and ROI
                    </span>
                    <span className="text-2">
                      Getting the most out of your Sales department by having
                      the right tools at the right time
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="near-cloud-container065">
          <div className="near-cloud-container066">
            <div className="near-cloud-container067">
              <div className="near-cloud-container068">
                <div className="near-cloud-container069">
                  <span className="near-cloud-text052 sub-titel-1">
                    Blog and case study
                  </span>
                  <span className="titel-2">Our latest case study</span>
                </div>
              </div>
              <div className="near-cloud-container070">
                <div className="near-cloud-container071">
                  <span className="near-cloud-text054">Read All Blog</span>
                  <svg viewBox="0 0 1024 1024" className="near-cloud-icon18">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="near-cloud-container072">
              <div className="near-cloud-container073">
                <div className="near-cloud-container074"></div>
                <div className="near-cloud-container075">
                  <div className="near-cloud-container076">
                    <div className="near-cloud-container077">
                      <span className="near-cloud-text055">IT Support</span>
                      <span className="near-cloud-text056">June 9, 2022</span>
                    </div>
                    <div className="near-cloud-container078"></div>
                  </div>
                  <div className="near-cloud-container079">
                    <span className="near-cloud-text057">
                      Being different in Sales is crucial for your success
                    </span>
                  </div>
                  <div className="near-cloud-container080">
                    <span className="near-cloud-text058">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="near-cloud-icon20">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="near-cloud-container081">
                <div className="near-cloud-container082"></div>
                <div className="near-cloud-container083">
                  <div className="near-cloud-container084">
                    <div className="near-cloud-container085">
                      <span className="near-cloud-text059">
                        Marketing Consulting
                      </span>
                      <span className="near-cloud-text060">June 9, 2022</span>
                    </div>
                    <div className="near-cloud-container086"></div>
                  </div>
                  <div className="near-cloud-container087">
                    <span className="near-cloud-text061">
                      Adding new ways of outreach can boost your growth
                    </span>
                  </div>
                  <div className="near-cloud-container088">
                    <span className="near-cloud-text062">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="near-cloud-icon22">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="near-cloud-container089">
                <div className="near-cloud-container090"></div>
                <div className="near-cloud-container091">
                  <div className="near-cloud-container092">
                    <div className="near-cloud-container093">
                      <span className="near-cloud-text063">
                        Business Consulting
                      </span>
                      <span className="near-cloud-text064">June 9, 2022</span>
                    </div>
                    <div className="near-cloud-container094"></div>
                  </div>
                  <div className="near-cloud-container095">
                    <span className="near-cloud-text065">
                      The right approach at the right time - how outreach can
                      change
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="near-cloud-container096">
                    <span className="near-cloud-text066">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="near-cloud-icon24">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="near-cloud-container097">
          <div className="near-cloud-container098">
            <div className="near-cloud-container099">
              <span className="titel-2">Subscribe Our Newsletter</span>
              <span className="near-cloud-text068 text-1">
                <span>
                  Enter your details to get business inspiration, trending
                  solutions,
                </span>
                <br></br>
                <span>and consulting tips delivered to your inbox</span>
              </span>
            </div>
            <div className="near-cloud-container100">
              <div className="near-cloud-container101">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="near-cloud-textinput input"
                />
              </div>
              <div className="near-cloud-container102">
                <span className="near-cloud-text072">Subscribe</span>
                <svg viewBox="0 0 1024 1024" className="near-cloud-icon26">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <MenuBottomComponent rootClassName="menu-bottom-component-root-class-name8"></MenuBottomComponent>
      </div>
      <div className="near-cloud-mobil">
        <div className="near-cloud-container103">
          <MenuBarMobil menu={2}></MenuBarMobil>
        </div>
        <div className="near-cloud-top">
          <div className="near-cloud-container104">
            <div className="near-cloud-container105">
              <div className="near-cloud-container106">
                <div className="near-cloud-container107">
                  <span className="near-cloud-text073 text-2">Near Cloud</span>
                </div>
                <div className="near-cloud-container108">
                  <span className="near-cloud-text074 titel-2-mobil">
                    You might find gold within your CRM contacts - we are the
                    shovel
                  </span>
                  <span className="text-1-mobil near-cloud-text075">
                    20% of all employees change their job each year. So do also
                    the people that you closed before. Their new job is your new
                    opportunity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="near-cloud-content gradient2">
          <div className="near-cloud-container109"></div>
          <div className="near-cloud-container110 border-b">
            <div className="near-cloud-container111">
              <span className="near-cloud-text076 sub-titel-1">
                - Our Product
              </span>
              <span className="near-cloud-text077 titel-2-mobil">
                Is your CRM up2date? No? Then you are missing out!
              </span>
              <span className="near-cloud-text078 text-1">
                Many of your hard earned contacts changed their job. But this is
                also a valuable chance fo new sales
              </span>
            </div>
            <img alt="image" src="/img_2.svg" className="near-cloud-image08" />
            <div className="near-cloud-container112">
              <div className="near-cloud-container113">
                <div className="near-cloud-container114">
                  <svg viewBox="0 0 1024 1024" className="near-cloud-icon28">
                    <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                  </svg>
                </div>
                <span className="ueberschrift-3">
                  Tracking of Buyer Personas
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="near-cloud-container115">
                <div className="near-cloud-container116">
                  <svg viewBox="0 0 1024 1024" className="near-cloud-icon30">
                    <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                  </svg>
                </div>
                <span className="ueberschrift-3">
                  Automated updates regarding their career
                </span>
              </div>
              <div className="near-cloud-container117">
                <div className="near-cloud-container118">
                  <svg viewBox="0 0 1024 1024" className="near-cloud-icon32">
                    <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                  </svg>
                </div>
                <span className="ueberschrift-3">Works with every CRM</span>
              </div>
              <div className="near-cloud-container119">
                <div className="near-cloud-container120">
                  <svg viewBox="0 0 1024 1024" className="near-cloud-icon34">
                    <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                  </svg>
                </div>
                <span className="ueberschrift-3">
                  Continuous Expert Support
                </span>
              </div>
            </div>
          </div>
          <div className="near-cloud-container121 border-b">
            <div className="near-cloud-container122">
              <span className="near-cloud-text083 sub-titel-1">
                - Our process
              </span>
              <span className="near-cloud-text084 titel-2-mobil">
                The process to start is as easy as it can be
              </span>
              <span className="near-cloud-text085 text-1">
                After we did the setup together with you, you can start with
                your Outbound Campaigns. We will then on a weekly meeting
                iterate the success to get the most out for you.
              </span>
            </div>
            <div className="near-cloud-container123">
              <img
                alt="image"
                src="/img_6.svg"
                className="near-cloud-image09"
              />
              <div className="near-cloud-container124">
                <span className="ueberschrift-3">
                  After a fast onboarding your customers will be tracked
                  automatically forever
                </span>
                <span className="near-cloud-text087 text-1">
                  Many of your hard earned contacts changed their job. But this
                  is also a valuable chance fo new sales
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="near-cloud-container125">
              <img
                alt="image"
                src="/img_7.svg"
                className="near-cloud-image10"
              />
              <div className="near-cloud-container126">
                <span className="ueberschrift-3">
                  All resulting job changes of your tracked profiles will be
                  send directly to you
                </span>
                <span className="near-cloud-text089 text-1">
                  Your sales people will thank you for those deals, as they
                  almost feel like a gift. Next to referral deals these might be
                  the highest converting leads
                </span>
              </div>
            </div>
          </div>
          <div className="near-cloud-container127 border-b">
            <div className="near-cloud-container128">
              <div className="near-cloud-container129 border-b">
                <span className="near-cloud-text090 titel-2-mobil">
                  Getting newcustomers like magic
                </span>
                <span className="near-cloud-text091 text-1">
                  Create a seamless integration between yourCRM system and
                  maintain a constant flow ofnew highly qualified leads.
                </span>
              </div>
              <div className="near-cloud-container130">
                <div className="near-cloud-container131">
                  <div className="near-cloud-container132">
                    <span className="near-cloud-text092">10K+</span>
                    <span className="text-1 near-cloud-text093">
                      Sales Calls
                    </span>
                  </div>
                  <div className="near-cloud-container133">
                    <span className="near-cloud-text094">125K+</span>
                    <span className="text-1 near-cloud-text095">
                      Data enriched
                    </span>
                  </div>
                </div>
                <div className="near-cloud-container134">
                  <div className="near-cloud-container135">
                    <span className="near-cloud-text096">15+</span>
                    <span className="text-1 near-cloud-text097">
                      Years Experience
                    </span>
                  </div>
                  <div className="near-cloud-container136">
                    <span className="near-cloud-text098">8+</span>
                    <span className="text-1 near-cloud-text099">
                      ROI on average
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="near-cloud-container137 border-b">
            <div className="near-cloud-container138">
              <span className="near-cloud-text100 sub-titel-1">
                - Our features
              </span>
              <span className="near-cloud-text101 titel-2-mobil">
                Our tool scales with you as you grow
              </span>
              <span className="near-cloud-text102 text-1">
                Even if you have a small number of customers yet, you are always
                free to start, as each tracked contact only costs 10 cents per
                month
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <img alt="image" src="/img_8.svg" className="near-cloud-image11" />
            <div className="near-cloud-container139">
              <div className="near-cloud-container140">
                <div className="near-cloud-container141">
                  <svg viewBox="0 0 1024 1024" className="near-cloud-icon36">
                    <path d="M554 128h342v256h-342v-256zM554 896v-426h342v426h-342zM128 896v-256h342v256h-342zM128 554v-426h342v426h-342z"></path>
                  </svg>
                </div>
                <div className="near-cloud-container142">
                  <span className="ueberschrift-3">
                    Additional channel for Leads
                  </span>
                  <span className="text-2 near-cloud-text104">
                    Getting the most out of your Sales department by having the
                    right tools at the right time
                  </span>
                </div>
              </div>
              <div className="near-cloud-container143">
                <div className="near-cloud-container144">
                  <svg viewBox="0 0 1024 1024" className="near-cloud-icon38">
                    <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                  </svg>
                </div>
                <div className="near-cloud-container145">
                  <span className="ueberschrift-3">
                    High Scalability, low entry
                  </span>
                  <span className="text-2">
                    Getting the most out of your Sales department by having the
                    right tools at the right time
                  </span>
                </div>
              </div>
              <div className="near-cloud-container146">
                <div className="near-cloud-container147">
                  <svg viewBox="0 0 1024 1024" className="near-cloud-icon40">
                    <path d="M512 128q160 0 272 112t112 272-112 272-272 112q-54 0-122-23t-112-57l60-60q76 54 174 54 124 0 211-87t87-211-87-211-211-87-211 87-87 211h128l-172 170-170-170h128q0-160 112-272t272-112zM598 512q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                  </svg>
                </div>
                <div className="near-cloud-container148">
                  <span className="ueberschrift-3">
                    Highest conversion rates and ROI
                  </span>
                  <span className="text-2">
                    Getting the most out of your Sales department by having the
                    right tools at the right time
                  </span>
                </div>
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

export default NearCloud
