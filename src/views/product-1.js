import React from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import MenuBar from '../components/menu-bar'
import ContactUsMiniFormComponent from '../components/contact-us-mini-form-component'
import MenuBottomComponent from '../components/menu-bottom-component'
import './product-1.css'

const Product1 = (props) => {
  return (
    <div className="product1-container">
      <Helmet>
        <title>Product-1 - Up2Data</title>
        <meta property="og:title" content="Product-1 - Up2Data" />
      </Helmet>
      <div className="product1-container001">
        <div className="product1-container002">
          <MenuBar menu2={true}></MenuBar>
          <div className="product1-container003">
            <div className="product1-container004">
              <div className="product1-container005">
                <span className="text-2">Product - 1</span>
              </div>
              <span className="product1-text01 titel-1">
                outbound sales is incredible - we help you to scale it
              </span>
              <span className="product1-text02 text-2">
                20% of all employees change their job each year. So do also the
                people that you closed before. Their new job is your new
                opportunity
              </span>
            </div>
            <div className="product1-container006">
              <ContactUsMiniFormComponent></ContactUsMiniFormComponent>
            </div>
          </div>
        </div>
        <div className="product1-container007">
          <span className="product1-text03 text-2">
            Our platform interacts with the CRMs that see the highest usage
            rates, ensuring optimal engagement.
          </span>
          <div className="product1-container008">
            <span className="product1-text04 titel-2">ClickUp</span>
            <span className="product1-text05 titel-2">HubSpot</span>
            <span className="product1-text06 titel-2">monday</span>
            <span className="product1-text07 titel-2">Freshsales</span>
            <span className="product1-text08 titel-2">salesforce</span>
            <span className="product1-text09 titel-2">Less Annoying CRM</span>
            <span className="product1-text10 titel-2">Zendesk</span>
            <span className="product1-text11 titel-2">Active Campaign</span>
          </div>
        </div>
        <div className="product1-container009 border-b">
          <div className="product1-container010">
            <div className="product1-container011">
              <div className="product1-container012">
                <span className="product1-text12 sub-titel-1">
                  - Our Product
                </span>
                <span className="titel-2">
                  Our automated Cold Outreach tool will help you to scale fast
                </span>
                <span className="text-1">
                  <span>
                    Scaling Sales is a numbers game. But we also help you to
                    achieve a high quality of scalable outreach
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
              <div className="product1-container013">
                <div className="product1-container014">
                  <div className="product1-container015">
                    <svg viewBox="0 0 1024 1024" className="product1-icon">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Automated AI based Cold Outreach
                  </span>
                </div>
                <div className="product1-container016">
                  <div className="product1-container017">
                    <svg viewBox="0 0 1024 1024" className="product1-icon02">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    CRM Analysis for more Sales Opportunities
                  </span>
                </div>
                <div className="product1-container018">
                  <div className="product1-container019">
                    <svg viewBox="0 0 1024 1024" className="product1-icon04">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    High Quality leads directly in your CRM
                  </span>
                </div>
                <div className="product1-container020">
                  <div className="product1-container021">
                    <svg viewBox="0 0 1024 1024" className="product1-icon06">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Continuous Expert Support
                  </span>
                </div>
              </div>
              <Link to="/contact-us" className="product1-navlink">
                <div className="product1-button-blue button-blue">
                  <span className="text-1">Get Started</span>
                  <svg viewBox="0 0 1024 1024" className="product1-icon08">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="product1-container022">
              <img alt="image" src="/img_2.svg" className="product1-image" />
            </div>
          </div>
        </div>
        <div className="product1-container023 border-b">
          <div className="product1-container024">
            <div className="product1-container025">
              <img alt="image" src="/img_1.svg" className="product1-image1" />
            </div>
            <div className="product1-container026">
              <div className="product1-container027">
                <span className="product1-text22 sub-titel-1">
                  - Our advantages
                </span>
                <span className="titel-2">
                  With us you are free in the definition of your cascades
                </span>
                <span className="text-1">
                  <span>
                    Most tools have a fixed amount of sequence steps or get
                    costly very easily. We have no interest in that. You should
                    be free in how many campaigns you are launching with as many
                    steps as you wish
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
              </div>
              <Link to="/contact-us" className="product1-navlink1">
                <div className="product1-button-blue1 button-blue">
                  <span className="text-1">Get Started</span>
                  <svg viewBox="0 0 1024 1024" className="product1-icon10">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="product1-container028 border-b">
          <div className="product1-container029">
            <div className="product1-container030">
              <div className="product1-container031">
                <span className="product1-text28 sub-titel-1">
                  - OUR FEATURES
                </span>
                <span className="titel-2">
                  You only have to focus on the positives. We do the rest
                </span>
                <span className="text-1">
                  <span>
                    Unlike other tools, we will only forward you the positive
                    replies. The others are taken care of.
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
              <div className="product1-container032">
                <div className="product1-container033">
                  <div className="product1-container034">
                    <svg viewBox="0 0 1024 1024" className="product1-icon12">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Filtering of positive replies
                  </span>
                </div>
                <div className="product1-container035">
                  <div className="product1-container036">
                    <svg viewBox="0 0 1024 1024" className="product1-icon14">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    High response rates
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="product1-container037">
                  <div className="product1-container038">
                    <svg viewBox="0 0 1024 1024" className="product1-icon16">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    High Quality leads directly in your CRM
                  </span>
                </div>
                <div className="product1-container039">
                  <div className="product1-container040">
                    <svg viewBox="0 0 1024 1024" className="product1-icon18">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Weekly Campaign Meetings
                  </span>
                </div>
              </div>
              <Link to="/contact-us" className="product1-navlink2">
                <div className="product1-button-blue2 button-blue">
                  <span className="text-1">Get Started</span>
                  <svg viewBox="0 0 1024 1024" className="product1-icon20">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="product1-container041">
              <img alt="image" src="/img_4.svg" className="product1-image2" />
            </div>
          </div>
        </div>
        <div className="product1-container042 border-b">
          <div className="product1-container043">
            <div className="product1-container044">
              <span className="titel-2">
                Learn about our company success stories
              </span>
              <span className="product1-text39 text-1">
                Start your sales journey today to get the most out of your
                efforts
              </span>
            </div>
            <div className="product1-container045">
              <div className="product1-container046">
                <div className="product1-container047">
                  <div className="product1-container048">
                    <div className="product1-container049">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="product1-image3"
                      />
                      <span className="product1-text40">10K+</span>
                    </div>
                  </div>
                  <span className="product1-text41">Sales Calls</span>
                </div>
                <div className="product1-container050"></div>
                <div className="product1-container051">
                  <div className="product1-container052">
                    <div className="product1-container053">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="product1-image4"
                      />
                      <span className="product1-text42">125K+</span>
                    </div>
                  </div>
                  <span className="product1-text43">Data enriched</span>
                </div>
                <div className="product1-container054"></div>
                <div className="product1-container055">
                  <div className="product1-container056">
                    <div className="product1-container057">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="product1-image5"
                      />
                      <span className="product1-text44">15+</span>
                    </div>
                  </div>
                  <span className="product1-text45">Years Experience</span>
                </div>
                <div className="product1-container058"></div>
                <div className="product1-container059">
                  <div className="product1-container060">
                    <div className="product1-container061">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="product1-image6"
                      />
                      <span className="product1-text46">8+</span>
                    </div>
                  </div>
                  <span className="product1-text47">ROI on average</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product1-container062">
          <div className="product1-container063">
            <div className="product1-container064">
              <span className="product1-text48 titel-2">
                The process to start is as easy as it can be
              </span>
              <span className="product1-text49 text-1">
                After we did the setup together with you, you can start with
                your Outbound Campaigns. We will then on a weekly meeting
                iterate the success to get the most out for you.
              </span>
            </div>
          </div>
          <div className="product1-container065">
            <div className="product1-container066">
              <div className="product1-container067">
                <div className="product1-container068">
                  <Player
                    src="https://lottie.host/71ed10da-8877-4337-a4ee-b7fb297a2996/X6gtxb1udb.json"
                    loop
                    speed="1"
                    autoplay
                    background="transparent"
                    className="product1-lottie-node"
                  ></Player>
                </div>
                <div className="product1-container069">
                  <span className="product1-text50 ueberschrift-1">
                    Onboarding
                  </span>
                </div>
                <div className="product1-container070"></div>
                <div className="product1-container071">
                  <span className="product1-text51 text-2">
                    In the Onboarding we will discuss the blacklisting, the ICP,
                    the buyer persona, the sequences, and the number of
                    campaigns
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="product1-container072">
                <div className="product1-container073">
                  <Player
                    src="https://lottie.host/7d8bcce8-da90-45b1-826b-7a1fe461ebb6/0BBnNjXnEa.json"
                    loop
                    speed="1"
                    autoplay
                    background="transparent"
                    className="product1-lottie-node1"
                  ></Player>
                </div>
                <div className="product1-container074">
                  <span className="product1-text52 ueberschrift-1">
                    Outbound
                  </span>
                </div>
                <div className="product1-container075"></div>
                <div className="product1-container076">
                  <span className="product1-text53 text-2">
                    After that we are good to go and the outbound campaigns can
                    be launched. You will get then deals directly in your inbox
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="product1-container077">
                <div className="product1-container078">
                  <Player
                    src="https://lottie.host/4bdf75d6-b59f-466a-b045-c92e622ba042/0pQ77iSRGu.json"
                    loop
                    speed="1"
                    autoplay
                    background="transparent"
                    className="product1-lottie-node2"
                  ></Player>
                </div>
                <div className="product1-container079">
                  <span className="product1-text54 ueberschrift-1">
                    Monitoring
                  </span>
                </div>
                <div className="product1-container080"></div>
                <div className="product1-container081">
                  <span className="product1-text55 text-2">
                    On a weekly basis we are discussing with you how to increase
                    the success further to get you the highest ROI possible
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product1-container082">
          <div className="product1-container083">
            <div className="product1-container084">
              <div className="product1-container085">
                <div className="product1-container086">
                  <span className="product1-text56 sub-titel-1">
                    Blog and case study
                  </span>
                  <span className="titel-2">Our latest case study</span>
                </div>
              </div>
              <div className="product1-container087">
                <div className="product1-container088">
                  <span className="product1-text58">Read All Blog</span>
                  <svg viewBox="0 0 1024 1024" className="product1-icon22">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="product1-container089">
              <div className="product1-container090">
                <div className="product1-container091"></div>
                <div className="product1-container092">
                  <div className="product1-container093">
                    <div className="product1-container094">
                      <span className="product1-text59">IT Support</span>
                      <span className="product1-text60">June 9, 2022</span>
                    </div>
                    <div className="product1-container095"></div>
                  </div>
                  <div className="product1-container096">
                    <span className="product1-text61">
                      Being different in Sales is crucial for your success
                    </span>
                  </div>
                  <div className="product1-container097">
                    <span className="product1-text62">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="product1-icon24">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="product1-container098">
                <div className="product1-container099"></div>
                <div className="product1-container100">
                  <div className="product1-container101">
                    <div className="product1-container102">
                      <span className="product1-text63">
                        Marketing Consulting
                      </span>
                      <span className="product1-text64">June 9, 2022</span>
                    </div>
                    <div className="product1-container103"></div>
                  </div>
                  <div className="product1-container104">
                    <span className="product1-text65">
                      Adding new ways of outreach can boost your growth
                    </span>
                  </div>
                  <div className="product1-container105">
                    <span className="product1-text66">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="product1-icon26">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="product1-container106">
                <div className="product1-container107"></div>
                <div className="product1-container108">
                  <div className="product1-container109">
                    <div className="product1-container110">
                      <span className="product1-text67">
                        Business Consulting
                      </span>
                      <span className="product1-text68">June 9, 2022</span>
                    </div>
                    <div className="product1-container111"></div>
                  </div>
                  <div className="product1-container112">
                    <span className="product1-text69">
                      The right approach at the right time - how outreach can
                      change
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="product1-container113">
                    <span className="product1-text70">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="product1-icon28">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product1-container114">
          <div className="product1-container115">
            <div className="product1-container116">
              <span className="titel-2">Subscribe Our Newsletter</span>
              <span className="product1-text72 text-1">
                <span>
                  Enter your details to get business inspiration, trending
                  solutions,
                </span>
                <br></br>
                <span>and consulting tips delivered to your inbox</span>
              </span>
            </div>
            <div className="product1-container117">
              <div className="product1-container118">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="product1-textinput input"
                />
              </div>
              <div className="product1-container119">
                <span className="product1-text76">Subscribe</span>
                <svg viewBox="0 0 1024 1024" className="product1-icon30">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <MenuBottomComponent rootClassName="menu-bottom-component-root-class-name4"></MenuBottomComponent>
      </div>
    </div>
  )
}

export default Product1
