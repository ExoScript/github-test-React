import React from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import MenuBar from '../components/menu-bar'
import ContactUsMiniFormComponent from '../components/contact-us-mini-form-component'
import MenuBottomComponent from '../components/menu-bottom-component'
import './mail-cloud.css'

const MailCloud = (props) => {
  return (
    <div className="mail-cloud-container">
      <Helmet>
        <title>Mail-Cloud - Up2Data</title>
        <meta property="og:title" content="Mail-Cloud - Up2Data" />
      </Helmet>
      <div className="mail-cloud-web">
        <div className="mail-cloud-container001">
          <MenuBar></MenuBar>
          <div className="mail-cloud-container002">
            <div className="mail-cloud-container003">
              <div className="mail-cloud-container004">
                <span className="mail-cloud-text text-2">Mail Cloud</span>
              </div>
              <span className="mail-cloud-text01 titel-1">
                outbound sales is incredible - we help you to scale it
              </span>
              <span className="mail-cloud-text02 text-2">
                20% of all employees change their job each year. So do also the
                people that you closed before. Their new job is your new
                opportunity
              </span>
            </div>
            <div className="mail-cloud-container005">
              <ContactUsMiniFormComponent></ContactUsMiniFormComponent>
            </div>
          </div>
        </div>
        <div className="mail-cloud-container006">
          <div className="mail-cloud-container007"></div>
          <span className="mail-cloud-text03 text-2">
            Our platform interacts with the CRMs that see the highest usage
            rates, ensuring optimal engagement.
          </span>
          <div className="mail-cloud-container008">
            <span className="mail-cloud-text04 titel-2">ClickUp</span>
            <span className="mail-cloud-text05 titel-2">HubSpot</span>
            <span className="mail-cloud-text06 titel-2">monday</span>
            <span className="mail-cloud-text07 titel-2">Freshsales</span>
            <span className="mail-cloud-text08 titel-2">salesforce</span>
            <span className="mail-cloud-text09 titel-2">Less Annoying CRM</span>
            <span className="mail-cloud-text10 titel-2">Zendesk</span>
            <span className="mail-cloud-text11 titel-2">Active Campaign</span>
          </div>
        </div>
        <div className="mail-cloud-container009 border-b">
          <div className="mail-cloud-container010">
            <div className="mail-cloud-container011">
              <div className="mail-cloud-container012">
                <span className="mail-cloud-text12 sub-titel-1">
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
              <div className="mail-cloud-container013">
                <div className="mail-cloud-container014">
                  <div className="mail-cloud-container015">
                    <svg viewBox="0 0 1024 1024" className="mail-cloud-icon">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Automated AI based Cold Outreach
                  </span>
                </div>
                <div className="mail-cloud-container016">
                  <div className="mail-cloud-container017">
                    <svg viewBox="0 0 1024 1024" className="mail-cloud-icon02">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    CRM Analysis for more Sales Opportunities
                  </span>
                </div>
                <div className="mail-cloud-container018">
                  <div className="mail-cloud-container019">
                    <svg viewBox="0 0 1024 1024" className="mail-cloud-icon04">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    High Quality leads directly in your CRM
                  </span>
                </div>
                <div className="mail-cloud-container020">
                  <div className="mail-cloud-container021">
                    <svg viewBox="0 0 1024 1024" className="mail-cloud-icon06">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Continuous Expert Support
                  </span>
                </div>
              </div>
              <Link to="/contact-us" className="mail-cloud-navlink">
                <div className="mail-cloud-button-blue button-blue">
                  <span className="text-1">Get Started</span>
                  <svg viewBox="0 0 1024 1024" className="mail-cloud-icon08">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="mail-cloud-container022">
              <img alt="image" src="/img_2.svg" className="mail-cloud-image" />
            </div>
          </div>
        </div>
        <div className="mail-cloud-container023 border-b">
          <div className="mail-cloud-container024">
            <div className="mail-cloud-container025">
              <img alt="image" src="/img_1.svg" className="mail-cloud-image1" />
            </div>
            <div className="mail-cloud-container026">
              <div className="mail-cloud-container027">
                <span className="mail-cloud-text22 sub-titel-1">
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
              <Link to="/contact-us" className="mail-cloud-navlink1">
                <div className="mail-cloud-button-blue1 button-blue">
                  <span className="text-1">Get Started</span>
                  <svg viewBox="0 0 1024 1024" className="mail-cloud-icon10">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mail-cloud-container028 border-b">
          <div className="mail-cloud-container029">
            <div className="mail-cloud-container030">
              <div className="mail-cloud-container031">
                <span className="mail-cloud-text28 sub-titel-1">
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
              <div className="mail-cloud-container032">
                <div className="mail-cloud-container033">
                  <div className="mail-cloud-container034">
                    <svg viewBox="0 0 1024 1024" className="mail-cloud-icon12">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Filtering of positive replies
                  </span>
                </div>
                <div className="mail-cloud-container035">
                  <div className="mail-cloud-container036">
                    <svg viewBox="0 0 1024 1024" className="mail-cloud-icon14">
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
                <div className="mail-cloud-container037">
                  <div className="mail-cloud-container038">
                    <svg viewBox="0 0 1024 1024" className="mail-cloud-icon16">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    High Quality leads directly in your CRM
                  </span>
                </div>
                <div className="mail-cloud-container039">
                  <div className="mail-cloud-container040">
                    <svg viewBox="0 0 1024 1024" className="mail-cloud-icon18">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Weekly Campaign Meetings
                  </span>
                </div>
              </div>
              <Link to="/contact-us" className="mail-cloud-navlink2">
                <div className="mail-cloud-button-blue2 button-blue">
                  <span className="text-1">Get Started</span>
                  <svg viewBox="0 0 1024 1024" className="mail-cloud-icon20">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="mail-cloud-container041">
              <img alt="image" src="/img_4.svg" className="mail-cloud-image2" />
            </div>
          </div>
        </div>
        <div className="mail-cloud-container042 border-b">
          <div className="mail-cloud-container043">
            <div className="mail-cloud-container044">
              <span className="titel-2">
                Learn about our company success stories
              </span>
              <span className="mail-cloud-text39 text-1">
                Start your sales journey today to get the most out of your
                efforts
              </span>
            </div>
            <div className="mail-cloud-container045">
              <div className="mail-cloud-container046">
                <div className="mail-cloud-container047">
                  <div className="mail-cloud-container048">
                    <div className="mail-cloud-container049">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="mail-cloud-image3"
                      />
                      <span className="mail-cloud-text40">10K+</span>
                    </div>
                  </div>
                  <span className="mail-cloud-text41">Sales Calls</span>
                </div>
                <div className="mail-cloud-container050"></div>
                <div className="mail-cloud-container051">
                  <div className="mail-cloud-container052">
                    <div className="mail-cloud-container053">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="mail-cloud-image4"
                      />
                      <span className="mail-cloud-text42">125K+</span>
                    </div>
                  </div>
                  <span className="mail-cloud-text43">Data enriched</span>
                </div>
                <div className="mail-cloud-container054"></div>
                <div className="mail-cloud-container055">
                  <div className="mail-cloud-container056">
                    <div className="mail-cloud-container057">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="mail-cloud-image5"
                      />
                      <span className="mail-cloud-text44">15+</span>
                    </div>
                  </div>
                  <span className="mail-cloud-text45">Years Experience</span>
                </div>
                <div className="mail-cloud-container058"></div>
                <div className="mail-cloud-container059">
                  <div className="mail-cloud-container060">
                    <div className="mail-cloud-container061">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="mail-cloud-image6"
                      />
                      <span className="mail-cloud-text46">8+</span>
                    </div>
                  </div>
                  <span className="mail-cloud-text47">ROI on average</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mail-cloud-container062">
          <div className="mail-cloud-container063">
            <div className="mail-cloud-container064">
              <span className="mail-cloud-text48 titel-2">
                The process to start is as easy as it can be
              </span>
              <span className="mail-cloud-text49 text-1">
                After we did the setup together with you, you can start with
                your Outbound Campaigns. We will then on a weekly meeting
                iterate the success to get the most out for you.
              </span>
            </div>
          </div>
          <div className="mail-cloud-container065">
            <div className="mail-cloud-container066">
              <div className="mail-cloud-container067">
                <div className="mail-cloud-container068">
                  <Player
                    src="https://lottie.host/71ed10da-8877-4337-a4ee-b7fb297a2996/X6gtxb1udb.json"
                    loop
                    speed="1"
                    autoplay
                    background="transparent"
                    className="mail-cloud-lottie-node"
                  ></Player>
                </div>
                <div className="mail-cloud-container069">
                  <span className="mail-cloud-text50 ueberschrift-1">
                    Onboarding
                  </span>
                </div>
                <div className="mail-cloud-container070"></div>
                <div className="mail-cloud-container071">
                  <span className="mail-cloud-text51 text-2">
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
              <div className="mail-cloud-container072">
                <div className="mail-cloud-container073">
                  <Player
                    src="https://lottie.host/7d8bcce8-da90-45b1-826b-7a1fe461ebb6/0BBnNjXnEa.json"
                    loop
                    speed="1"
                    autoplay
                    background="transparent"
                    className="mail-cloud-lottie-node1"
                  ></Player>
                </div>
                <div className="mail-cloud-container074">
                  <span className="mail-cloud-text52 ueberschrift-1">
                    Outbound
                  </span>
                </div>
                <div className="mail-cloud-container075"></div>
                <div className="mail-cloud-container076">
                  <span className="mail-cloud-text53 text-2">
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
              <div className="mail-cloud-container077">
                <div className="mail-cloud-container078">
                  <Player
                    src="https://lottie.host/4bdf75d6-b59f-466a-b045-c92e622ba042/0pQ77iSRGu.json"
                    loop
                    speed="1"
                    autoplay
                    background="transparent"
                    className="mail-cloud-lottie-node2"
                  ></Player>
                </div>
                <div className="mail-cloud-container079">
                  <span className="mail-cloud-text54 ueberschrift-1">
                    Monitoring
                  </span>
                </div>
                <div className="mail-cloud-container080"></div>
                <div className="mail-cloud-container081">
                  <span className="mail-cloud-text55 text-2">
                    On a weekly basis we are discussing with you how to increase
                    the success further to get you the highest ROI possible
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mail-cloud-container082">
          <div className="mail-cloud-container083">
            <div className="mail-cloud-container084">
              <div className="mail-cloud-container085">
                <div className="mail-cloud-container086">
                  <span className="mail-cloud-text56 sub-titel-1">
                    Blog and case study
                  </span>
                  <span className="titel-2">Our latest case study</span>
                </div>
              </div>
              <div className="mail-cloud-container087">
                <div className="mail-cloud-container088">
                  <span className="mail-cloud-text58">Read All Blog</span>
                  <svg viewBox="0 0 1024 1024" className="mail-cloud-icon22">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="mail-cloud-container089">
              <div className="mail-cloud-container090">
                <div className="mail-cloud-container091"></div>
                <div className="mail-cloud-container092">
                  <div className="mail-cloud-container093">
                    <div className="mail-cloud-container094">
                      <span className="mail-cloud-text59">IT Support</span>
                      <span className="mail-cloud-text60">June 9, 2022</span>
                    </div>
                    <div className="mail-cloud-container095"></div>
                  </div>
                  <div className="mail-cloud-container096">
                    <span className="mail-cloud-text61">
                      Being different in Sales is crucial for your success
                    </span>
                  </div>
                  <div className="mail-cloud-container097">
                    <span className="mail-cloud-text62">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="mail-cloud-icon24">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mail-cloud-container098">
                <div className="mail-cloud-container099"></div>
                <div className="mail-cloud-container100">
                  <div className="mail-cloud-container101">
                    <div className="mail-cloud-container102">
                      <span className="mail-cloud-text63">
                        Marketing Consulting
                      </span>
                      <span className="mail-cloud-text64">June 9, 2022</span>
                    </div>
                    <div className="mail-cloud-container103"></div>
                  </div>
                  <div className="mail-cloud-container104">
                    <span className="mail-cloud-text65">
                      Adding new ways of outreach can boost your growth
                    </span>
                  </div>
                  <div className="mail-cloud-container105">
                    <span className="mail-cloud-text66">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="mail-cloud-icon26">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mail-cloud-container106">
                <div className="mail-cloud-container107"></div>
                <div className="mail-cloud-container108">
                  <div className="mail-cloud-container109">
                    <div className="mail-cloud-container110">
                      <span className="mail-cloud-text67">
                        Business Consulting
                      </span>
                      <span className="mail-cloud-text68">June 9, 2022</span>
                    </div>
                    <div className="mail-cloud-container111"></div>
                  </div>
                  <div className="mail-cloud-container112">
                    <span className="mail-cloud-text69">
                      The right approach at the right time - how outreach can
                      change
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="mail-cloud-container113">
                    <span className="mail-cloud-text70">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="mail-cloud-icon28">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mail-cloud-container114">
          <div className="mail-cloud-container115">
            <div className="mail-cloud-container116">
              <span className="titel-2">Subscribe Our Newsletter</span>
              <span className="mail-cloud-text72 text-1">
                <span>
                  Enter your details to get business inspiration, trending
                  solutions,
                </span>
                <br></br>
                <span>and consulting tips delivered to your inbox</span>
              </span>
            </div>
            <div className="mail-cloud-container117">
              <div className="mail-cloud-container118">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mail-cloud-textinput input"
                />
              </div>
              <div className="mail-cloud-container119">
                <span className="mail-cloud-text76">Subscribe</span>
                <svg viewBox="0 0 1024 1024" className="mail-cloud-icon30">
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

export default MailCloud
