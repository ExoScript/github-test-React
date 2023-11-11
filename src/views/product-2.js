import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import MenuBar from '../components/menu-bar'
import ContactUsMiniFormComponent from '../components/contact-us-mini-form-component'
import MenuBottomComponent from '../components/menu-bottom-component'
import './product-2.css'

const Product2 = (props) => {
  return (
    <div className="product2-container">
      <Helmet>
        <title>Product-2 - Traffls</title>
        <meta property="og:title" content="Product-2 - Traffls" />
      </Helmet>
      <div className="product2-container001">
        <div className="product2-container002">
          <MenuBar menu2={true}></MenuBar>
          <div className="product2-container003">
            <div className="product2-container004">
              <div className="product2-container005">
                <span className="text-2">Product - 2</span>
              </div>
              <span className="product2-text01 titel-1">
                You might find gold within your CRM contacts - we are the shovel
              </span>
              <span className="product2-text02 text-2">
                20% of all employees change their job each year. So do also the
                people that you closed before. Their new job is your new
                opportunity
              </span>
            </div>
            <div className="product2-container006">
              <ContactUsMiniFormComponent></ContactUsMiniFormComponent>
            </div>
          </div>
        </div>
        <div className="product2-container007">
          <span className="product2-text03 text-2">
            Our platform interacts with the CRMs that see the highest usage
            rates, ensuring optimal engagement.
          </span>
          <div className="product2-container008">
            <span className="product2-text04 titel-2">ClickUp</span>
            <span className="product2-text05 titel-2">HubSpot</span>
            <span className="product2-text06 titel-2">monday</span>
            <span className="product2-text07 titel-2">Freshsales</span>
            <span className="product2-text08 titel-2">salesforce</span>
            <span className="product2-text09 titel-2">Less Annoying CRM</span>
            <span className="product2-text10 titel-2">Zendesk</span>
            <span className="product2-text11 titel-2">Active Campaign</span>
          </div>
        </div>
        <div className="product2-container009 border-b">
          <div className="product2-container010">
            <div className="product2-container011">
              <div className="product2-container012">
                <span className="product2-text12 sub-titel-1">
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
              <div className="product2-container013">
                <div className="product2-container014">
                  <div className="product2-container015">
                    <svg viewBox="0 0 1024 1024" className="product2-icon">
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
                <div className="product2-container016">
                  <div className="product2-container017">
                    <svg viewBox="0 0 1024 1024" className="product2-icon02">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Automated updates regarding their career
                  </span>
                </div>
                <div className="product2-container018">
                  <div className="product2-container019">
                    <svg viewBox="0 0 1024 1024" className="product2-icon04">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">Works with every CRM</span>
                </div>
                <div className="product2-container020">
                  <div className="product2-container021">
                    <svg viewBox="0 0 1024 1024" className="product2-icon06">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Continuous Expert Support
                  </span>
                </div>
              </div>
              <Link to="/contact-us" className="product2-navlink">
                <div className="product2-button-blue button-blue">
                  <span className="text-1">Get Started</span>
                  <svg viewBox="0 0 1024 1024" className="product2-icon08">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="product2-container022">
              <img alt="image" src="/img_2.svg" className="product2-image" />
            </div>
          </div>
        </div>
        <div className="product2-container023 border-b">
          <div className="product2-container024">
            <div className="product2-container025">
              <span className="product2-text22 sub-titel-1">
                - Our advantages
              </span>
              <span className="titel-2">
                The more customers you have, the higher the need to track them
                closely
              </span>
            </div>
            <Link to="/contact-us" className="product2-navlink1">
              <div className="product2-button-blue1 button-blue">
                <span className="text-1">Get Started</span>
                <svg viewBox="0 0 1024 1024" className="product2-icon10">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </Link>
            <div className="product2-container026">
              <div className="product2-container027">
                <img src="/img_6.svg" alt="image" className="product2-image1" />
                <div className="product2-container028">
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
              <div className="product2-container029">
                <img src="/img_7.svg" alt="image" className="product2-image2" />
                <div className="product2-container030">
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
        <div className="product2-container031 border-b">
          <div className="product2-container032">
            <div className="product2-container033">
              <span className="titel-2">
                Learn about our company success stories
              </span>
              <span className="product2-text34 text-1">
                Start your sales journey today to get the most out of your
                efforts
              </span>
            </div>
            <div className="product2-container034">
              <div className="product2-container035">
                <div className="product2-container036">
                  <div className="product2-container037">
                    <div className="product2-container038">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="product2-image3"
                      />
                      <span className="product2-text35">10K+</span>
                    </div>
                  </div>
                  <span className="product2-text36">Sales Calls</span>
                </div>
                <div className="product2-container039"></div>
                <div className="product2-container040">
                  <div className="product2-container041">
                    <div className="product2-container042">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="product2-image4"
                      />
                      <span className="product2-text37">125K+</span>
                    </div>
                  </div>
                  <span className="product2-text38">Data enriched</span>
                </div>
                <div className="product2-container043"></div>
                <div className="product2-container044">
                  <div className="product2-container045">
                    <div className="product2-container046">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="product2-image5"
                      />
                      <span className="product2-text39">15+</span>
                    </div>
                  </div>
                  <span className="product2-text40">Years Experience</span>
                </div>
                <div className="product2-container047"></div>
                <div className="product2-container048">
                  <div className="product2-container049">
                    <div className="product2-container050">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="product2-image6"
                      />
                      <span className="product2-text41">8+</span>
                    </div>
                  </div>
                  <span className="product2-text42">ROI on average</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product2-container051">
          <div className="product2-container052">
            <div className="product2-container053">
              <div className="product2-container054">
                <img alt="image" src="/img_8.svg" className="product2-image7" />
              </div>
              <div className="product2-container055">
                <span className="product2-text43 sub-titel-1">
                  - our features
                </span>
                <span className="titel-2">
                  Our tool scales with you as you grow
                </span>
                <span className="product2-text45 text-1">
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
                <div className="product2-container056">
                  <div className="product2-container057">
                    <svg viewBox="0 0 1024 1024" className="product2-icon12">
                      <path d="M554 128h342v256h-342v-256zM554 896v-426h342v426h-342zM128 896v-256h342v256h-342zM128 554v-426h342v426h-342z"></path>
                    </svg>
                  </div>
                  <div className="product2-container058">
                    <span className="ueberschrift-3">
                      Additional channel for Leads
                    </span>
                    <span className="text-2">
                      Getting the most out of your Sales department by having
                      the right tools at the right time
                    </span>
                  </div>
                </div>
                <div className="product2-container059">
                  <div className="product2-container060">
                    <svg viewBox="0 0 1024 1024" className="product2-icon14">
                      <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                    </svg>
                  </div>
                  <div className="product2-container061">
                    <span className="ueberschrift-3">
                      High Scalability, low entry
                    </span>
                    <span className="text-2">
                      Getting the most out of your Sales department by having
                      the right tools at the right time
                    </span>
                  </div>
                </div>
                <div className="product2-container062">
                  <div className="product2-container063">
                    <svg viewBox="0 0 1024 1024" className="product2-icon16">
                      <path d="M512 128q160 0 272 112t112 272-112 272-272 112q-54 0-122-23t-112-57l60-60q76 54 174 54 124 0 211-87t87-211-87-211-211-87-211 87-87 211h128l-172 170-170-170h128q0-160 112-272t272-112zM598 512q0 34-26 60t-60 26-60-26-26-60 26-60 60-26 60 26 26 60z"></path>
                    </svg>
                  </div>
                  <div className="product2-container064">
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
        <div className="product2-container065">
          <div className="product2-container066">
            <div className="product2-container067">
              <div className="product2-container068">
                <div className="product2-container069">
                  <span className="product2-text54 sub-titel-1">
                    Blog and case study
                  </span>
                  <span className="titel-2">Our latest case study</span>
                </div>
              </div>
              <div className="product2-container070">
                <div className="product2-container071">
                  <span className="product2-text56">Read All Blog</span>
                  <svg viewBox="0 0 1024 1024" className="product2-icon18">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="product2-container072">
              <div className="product2-container073">
                <div className="product2-container074"></div>
                <div className="product2-container075">
                  <div className="product2-container076">
                    <div className="product2-container077">
                      <span className="product2-text57">IT Support</span>
                      <span className="product2-text58">June 9, 2022</span>
                    </div>
                    <div className="product2-container078"></div>
                  </div>
                  <div className="product2-container079">
                    <span className="product2-text59">
                      Being different in Sales is crucial for your success
                    </span>
                  </div>
                  <div className="product2-container080">
                    <span className="product2-text60">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="product2-icon20">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="product2-container081">
                <div className="product2-container082"></div>
                <div className="product2-container083">
                  <div className="product2-container084">
                    <div className="product2-container085">
                      <span className="product2-text61">
                        Marketing Consulting
                      </span>
                      <span className="product2-text62">June 9, 2022</span>
                    </div>
                    <div className="product2-container086"></div>
                  </div>
                  <div className="product2-container087">
                    <span className="product2-text63">
                      Adding new ways of outreach can boost your growth
                    </span>
                  </div>
                  <div className="product2-container088">
                    <span className="product2-text64">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="product2-icon22">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="product2-container089">
                <div className="product2-container090"></div>
                <div className="product2-container091">
                  <div className="product2-container092">
                    <div className="product2-container093">
                      <span className="product2-text65">
                        Business Consulting
                      </span>
                      <span className="product2-text66">June 9, 2022</span>
                    </div>
                    <div className="product2-container094"></div>
                  </div>
                  <div className="product2-container095">
                    <span className="product2-text67">
                      The right approach at the right time - how outreach can
                      change
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="product2-container096">
                    <span className="product2-text68">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="product2-icon24">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product2-container097">
          <div className="product2-container098">
            <div className="product2-container099">
              <span className="titel-2">Subscribe Our Newsletter</span>
              <span className="product2-text70 text-1">
                <span>
                  Enter your details to get business inspiration, trending
                  solutions,
                </span>
                <br></br>
                <span>and consulting tips delivered to your inbox</span>
              </span>
            </div>
            <div className="product2-container100">
              <div className="product2-container101">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="product2-textinput input"
                />
              </div>
              <div className="product2-container102">
                <span className="product2-text74">Subscribe</span>
                <svg viewBox="0 0 1024 1024" className="product2-icon26">
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

export default Product2
