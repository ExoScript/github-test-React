import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import MenuBar from '../components/menu-bar'
import ContactUsMiniFormComponent from '../components/contact-us-mini-form-component'
import MenuBottomComponent from '../components/menu-bottom-component'
import './near-cloud.css'

const NearCloud = (props) => {
  return (
    <div className="near-cloud-container">
      <Helmet>
        <title>Near-Cloud - Up2Data</title>
        <meta property="og:title" content="Near-Cloud - Up2Data" />
      </Helmet>
      <div className="near-cloud-container001">
        <div className="near-cloud-container002">
          <MenuBar></MenuBar>
          <div className="near-cloud-container003">
            <div className="near-cloud-container004">
              <div className="near-cloud-container005">
                <span className="text-2">Near Cloud</span>
              </div>
              <span className="near-cloud-text01 titel-1">
                You might find gold within your CRM contacts - we are the shovel
              </span>
              <span className="near-cloud-text02 text-2">
                20% of all employees change their job each year. So do also the
                people that you closed before. Their new job is your new
                opportunity
              </span>
            </div>
            <div className="near-cloud-container006">
              <ContactUsMiniFormComponent></ContactUsMiniFormComponent>
            </div>
          </div>
        </div>
        <div className="near-cloud-container007">
          <span className="near-cloud-text03 text-2">
            Our platform interacts with the CRMs that see the highest usage
            rates, ensuring optimal engagement.
          </span>
          <div className="near-cloud-container008">
            <span className="near-cloud-text04 titel-2">ClickUp</span>
            <span className="near-cloud-text05 titel-2">HubSpot</span>
            <span className="near-cloud-text06 titel-2">monday</span>
            <span className="near-cloud-text07 titel-2">Freshsales</span>
            <span className="near-cloud-text08 titel-2">salesforce</span>
            <span className="near-cloud-text09 titel-2">Less Annoying CRM</span>
            <span className="near-cloud-text10 titel-2">Zendesk</span>
            <span className="near-cloud-text11 titel-2">Active Campaign</span>
          </div>
        </div>
        <div className="near-cloud-container009 border-b">
          <div className="near-cloud-container010">
            <div className="near-cloud-container011">
              <div className="near-cloud-container012">
                <span className="near-cloud-text12 sub-titel-1">
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
              <span className="near-cloud-text22 sub-titel-1">
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
                  src="/img_6.svg"
                  alt="image"
                  className="near-cloud-image1"
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
                  src="/img_7.svg"
                  alt="image"
                  className="near-cloud-image2"
                />
                <div className="near-cloud-container030">
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
            </div>
          </div>
        </div>
        <div className="near-cloud-container031 border-b">
          <div className="near-cloud-container032">
            <div className="near-cloud-container033">
              <span className="titel-2">
                Learn about our company success stories
              </span>
              <span className="near-cloud-text34 text-1">
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
                        className="near-cloud-image3"
                      />
                      <span className="near-cloud-text35">10K+</span>
                    </div>
                  </div>
                  <span className="near-cloud-text36">Sales Calls</span>
                </div>
                <div className="near-cloud-container039"></div>
                <div className="near-cloud-container040">
                  <div className="near-cloud-container041">
                    <div className="near-cloud-container042">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="near-cloud-image4"
                      />
                      <span className="near-cloud-text37">125K+</span>
                    </div>
                  </div>
                  <span className="near-cloud-text38">Data enriched</span>
                </div>
                <div className="near-cloud-container043"></div>
                <div className="near-cloud-container044">
                  <div className="near-cloud-container045">
                    <div className="near-cloud-container046">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="near-cloud-image5"
                      />
                      <span className="near-cloud-text39">15+</span>
                    </div>
                  </div>
                  <span className="near-cloud-text40">Years Experience</span>
                </div>
                <div className="near-cloud-container047"></div>
                <div className="near-cloud-container048">
                  <div className="near-cloud-container049">
                    <div className="near-cloud-container050">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="near-cloud-image6"
                      />
                      <span className="near-cloud-text41">8+</span>
                    </div>
                  </div>
                  <span className="near-cloud-text42">ROI on average</span>
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
                  className="near-cloud-image7"
                />
              </div>
              <div className="near-cloud-container055">
                <span className="near-cloud-text43 sub-titel-1">
                  - our features
                </span>
                <span className="titel-2">
                  Our tool scales with you as you grow
                </span>
                <span className="near-cloud-text45 text-1">
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
                  <span className="near-cloud-text54 sub-titel-1">
                    Blog and case study
                  </span>
                  <span className="titel-2">Our latest case study</span>
                </div>
              </div>
              <div className="near-cloud-container070">
                <div className="near-cloud-container071">
                  <span className="near-cloud-text56">Read All Blog</span>
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
                      <span className="near-cloud-text57">IT Support</span>
                      <span className="near-cloud-text58">June 9, 2022</span>
                    </div>
                    <div className="near-cloud-container078"></div>
                  </div>
                  <div className="near-cloud-container079">
                    <span className="near-cloud-text59">
                      Being different in Sales is crucial for your success
                    </span>
                  </div>
                  <div className="near-cloud-container080">
                    <span className="near-cloud-text60">Read More</span>
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
                      <span className="near-cloud-text61">
                        Marketing Consulting
                      </span>
                      <span className="near-cloud-text62">June 9, 2022</span>
                    </div>
                    <div className="near-cloud-container086"></div>
                  </div>
                  <div className="near-cloud-container087">
                    <span className="near-cloud-text63">
                      Adding new ways of outreach can boost your growth
                    </span>
                  </div>
                  <div className="near-cloud-container088">
                    <span className="near-cloud-text64">Read More</span>
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
                      <span className="near-cloud-text65">
                        Business Consulting
                      </span>
                      <span className="near-cloud-text66">June 9, 2022</span>
                    </div>
                    <div className="near-cloud-container094"></div>
                  </div>
                  <div className="near-cloud-container095">
                    <span className="near-cloud-text67">
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
                    <span className="near-cloud-text68">Read More</span>
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
              <span className="near-cloud-text70 text-1">
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
                <span className="near-cloud-text74">Subscribe</span>
                <svg viewBox="0 0 1024 1024" className="near-cloud-icon26">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <MenuBottomComponent rootClassName="menu-bottom-component-root-class-name8"></MenuBottomComponent>
      </div>
    </div>
  )
}

export default NearCloud
