import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import MenuBar from '../components/menu-bar'
import ContactUsMiniFormComponent from '../components/contact-us-mini-form-component'
import MenuBottomComponent from '../components/menu-bottom-component'
import MenuBarMobil from '../components/menu-bar-mobil'
import SubscribeMobilComponent from '../components/subscribe-mobil-component'
import MenuBottomMobilComponent from '../components/menu-bottom-mobil-component'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-us - Traffls</title>
        <meta property="og:title" content="About-us - Traffls" />
      </Helmet>
      <div className="about-us-web">
        <div className="about-us-container01">
          <MenuBar menu3={true}></MenuBar>
          <div className="about-us-container02">
            <div className="about-us-container03">
              <div className="about-us-container04">
                <span className="about-us-text text-2">About us</span>
              </div>
              <span className="about-us-text01 titel-1">
                We think about Sales differently
              </span>
              <span className="about-us-text02 text-2">
                Our tools will help sales teams in B2B companies from small to
                big. Processes can always be optimized - and we will help you
                with that
              </span>
            </div>
            <div className="about-us-container05">
              <ContactUsMiniFormComponent></ContactUsMiniFormComponent>
            </div>
          </div>
        </div>
        <div className="about-us-container06">
          <div className="about-us-container07"></div>
          <span className="about-us-text03 text-2">
            Our platform interacts with the CRMs that see the highest usage
            rates, ensuring optimal engagement.
          </span>
          <div className="about-us-container08">
            <span className="about-us-text04 titel-2">ClickUp</span>
            <span className="about-us-text05 titel-2">HubSpot</span>
            <span className="about-us-text06 titel-2">monday</span>
            <span className="about-us-text07 titel-2">Freshsales</span>
            <span className="about-us-text08 titel-2">salesforce</span>
            <span className="about-us-text09 titel-2">Less Annoying CRM</span>
            <span className="about-us-text10 titel-2">Zendesk</span>
            <span className="about-us-text11 titel-2">Active Campaign</span>
          </div>
        </div>
        <div className="about-us-container09 border-b">
          <div className="about-us-container10">
            <div className="about-us-container11">
              <div className="about-us-container12">
                <span className="about-us-text12 sub-titel-1">- About US</span>
                <span className="titel-2">About Traffls</span>
                <span className="text-1">
                  <span>
                    We are a team of highly motivated Sales and Tech experts,
                    that have seen several B2B Sales Structures and Approaches.
                    We try to combine our knowledge to create state-of-the art
                    software that enables sales teams to scale more efficiently
                    than ever before. Our goals is to surprise our customers
                    with things that either did not exist before or with tools
                    that are better and cheaper then other tools in the market.
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
            <div className="about-us-container13">
              <img alt="image" src="/img_5.svg" className="about-us-image" />
            </div>
          </div>
        </div>
        <div className="about-us-container14">
          <div className="about-us-container15">
            <div className="about-us-container16">
              <div className="about-us-container17">
                <div className="about-us-container18">
                  <span className="about-us-text17 sub-titel-1">
                    - Our Mission
                  </span>
                  <span className="titel-2">
                    The Mission of Our CRM Software Solution
                  </span>
                </div>
              </div>
              <div className="about-us-container19">
                <Link to="/contact-us" className="about-us-navlink">
                  <div className="about-us-button-blue button-blue">
                    <span className="text-1">Get Started</span>
                    <svg viewBox="0 0 1024 1024" className="about-us-icon">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className="about-us-container20">
              <div className="about-us-container21">
                <img
                  alt="image"
                  src="/group%201413372149-700w.png"
                  className="about-us-image01"
                />
              </div>
              <div className="about-us-container22">
                <span className="about-us-text20 text-1">
                  <span>
                    One of the primary functions of CRM software is to
                    consolidate customer information from various sources, such
                    as email, social media, website interactions, and sales
                    transactions. This holistic view of customer data allows
                    companies to create
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div
                  data-thq="thq-dropdown"
                  className="about-us-thq-dropdown list-item"
                >
                  <ul
                    data-thq="thq-dropdown-list"
                    className="about-us-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="about-us-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="about-us-dropdown-toggle"
                      >
                        <span className="about-us-text23">Sub-menu Item</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="about-us-dropdown1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="about-us-dropdown-toggle1"
                      >
                        <span className="about-us-text24">Sub-menu Item</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="about-us-dropdown2 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="about-us-dropdown-toggle2"
                      >
                        <span className="about-us-text25">Sub-menu Item</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-container23">
          <div className="about-us-container24">
            <div className="about-us-container25">
              <span className="titel-2">
                Learn about our company success stories
              </span>
              <span className="about-us-text27 text-1">
                Start your sales journey today to get the most out of your
                efforts
              </span>
            </div>
            <div className="about-us-container26">
              <div className="about-us-container27">
                <div className="about-us-container28">
                  <div className="about-us-container29">
                    <div className="about-us-container30">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="about-us-image02"
                      />
                      <span className="about-us-text28">10K+</span>
                    </div>
                  </div>
                  <span className="about-us-text29">Sales Calls</span>
                </div>
                <div className="about-us-container31"></div>
                <div className="about-us-container32">
                  <div className="about-us-container33">
                    <div className="about-us-container34">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="about-us-image03"
                      />
                      <span className="about-us-text30">125K+</span>
                    </div>
                  </div>
                  <span className="about-us-text31">Data enriched</span>
                </div>
                <div className="about-us-container35"></div>
                <div className="about-us-container36">
                  <div className="about-us-container37">
                    <div className="about-us-container38">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="about-us-image04"
                      />
                      <span className="about-us-text32">15+</span>
                    </div>
                  </div>
                  <span className="about-us-text33">Years Experience</span>
                </div>
                <div className="about-us-container39"></div>
                <div className="about-us-container40">
                  <div className="about-us-container41">
                    <div className="about-us-container42">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="about-us-image05"
                      />
                      <span className="about-us-text34">8+</span>
                    </div>
                  </div>
                  <span className="about-us-text35">ROI on average</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-container43">
          <div className="about-us-container44">
            <div className="about-us-container45">
              <div className="about-us-container46">
                <span className="about-us-text36 sub-titel-1">
                  - Our Vision
                </span>
                <span className="titel-2">
                  Our Vision for Innovating CRM Software Solutions
                </span>
                <span className="text-1">
                  <span>
                    One of the primary functions of CRM software is to
                    consolidate customer information from various sources, such
                    as email, social media, website interactions, and sales
                    transactions.
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
              <div className="about-us-container47">
                <div className="about-us-container48">
                  <div className="about-us-container49">
                    <svg viewBox="0 0 1024 1024" className="about-us-icon02">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Automated AI based Cold Outreach
                  </span>
                </div>
                <div className="about-us-container50">
                  <div className="about-us-container51">
                    <svg viewBox="0 0 1024 1024" className="about-us-icon04">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    CRM Analysis for more Sales Opportunities
                  </span>
                </div>
                <div className="about-us-container52">
                  <div className="about-us-container53">
                    <svg viewBox="0 0 1024 1024" className="about-us-icon06">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    High Quality leads directly in your CRM
                  </span>
                </div>
                <div className="about-us-container54">
                  <div className="about-us-container55">
                    <svg viewBox="0 0 1024 1024" className="about-us-icon08">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-3">
                    Continuous Expert Support
                  </span>
                </div>
              </div>
              <Link to="/contact-us" className="about-us-navlink1">
                <div className="about-us-button-blue1 button-blue">
                  <span className="text-1">Get Started</span>
                  <svg viewBox="0 0 1024 1024" className="about-us-icon10">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="about-us-container56">
              <img alt="image" src="/img_2.svg" className="about-us-image06" />
            </div>
          </div>
        </div>
        <div className="about-us-container57">
          <div className="about-us-container58">
            <div className="about-us-container59">
              <span className="titel-2">Subscribe Our Newsletter</span>
              <span className="about-us-text47 text-1">
                <span>
                  Enter your details to get business inspiration, trending
                  solutions,
                </span>
                <br></br>
                <span>and consulting tips delivered to your inbox</span>
              </span>
            </div>
            <div className="about-us-container60">
              <div className="about-us-container61">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="about-us-textinput input"
                />
              </div>
              <div className="about-us-container62">
                <span className="about-us-text51">Subscribe</span>
                <svg viewBox="0 0 1024 1024" className="about-us-icon12">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <MenuBottomComponent rootClassName="menu-bottom-component-root-class-name2"></MenuBottomComponent>
      </div>
      <div className="about-us-mobil">
        <div className="about-us-container63">
          <MenuBarMobil menu={3}></MenuBarMobil>
        </div>
        <div className="about-us-top">
          <div className="about-us-container64">
            <div className="about-us-container65">
              <div className="about-us-container66">
                <div className="about-us-container67">
                  <span className="about-us-text52 text-2">About us</span>
                </div>
                <div className="about-us-container68">
                  <span className="about-us-text53 titel-2-mobil">
                    We think about Sales differently
                  </span>
                  <span className="text-1-mobil about-us-text54">
                    Our tools will help sales teams in B2B companies from small
                    to big. Processes can always be optimized - and we will help
                    you with that
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-content gradient2">
          <div className="about-us-container69"></div>
          <div className="about-us-container70 border-b">
            <div className="about-us-container71">
              <span className="about-us-text55 sub-titel-1">- About US</span>
              <span className="about-us-text56 titel-2-mobil">
                About Traffls
              </span>
              <span className="about-us-text57 text-1">
                We are a team of highly motivated Sales and Tech experts, that
                have seen several B2B Sales Structures and Approaches. We try to
                combine our knowledge to create state-of-the art software that
                enables sales teams to scale more efficiently than ever before.
                Our goals is to surprise our customers with things that either
                did not exist before or with tools that are better and cheaper
                then other tools in the market.
              </span>
            </div>
            <img alt="image" src="/img_5.svg" className="about-us-image07" />
          </div>
          <div className="about-us-container72 border-b">
            <div className="about-us-container73">
              <span className="about-us-text58 sub-titel-1">- Our Mission</span>
              <span className="about-us-text59 titel-2-mobil">
                The Mission of Our CRM Software Solution
              </span>
              <span className="about-us-text60 text-1">
                One of the primary functions of CRM software is to consolidate
                customer information from various sources, such as email, social
                media, website interactions, and sales transactions. This
                holistic view of customer data allows companies to create
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <img
              alt="image"
              src="/group%201413372149-700w.png"
              className="about-us-image08"
            />
          </div>
          <div className="about-us-container74 border-b">
            <div className="about-us-container75">
              <div className="about-us-container76 border-b">
                <span className="about-us-text61 titel-2-mobil">
                  Getting newcustomers like magic
                </span>
                <span className="about-us-text62 text-1">
                  Create a seamless integration between yourCRM system and
                  maintain a constant flow ofnew highly qualified leads.
                </span>
              </div>
              <div className="about-us-container77">
                <div className="about-us-container78">
                  <div className="about-us-container79">
                    <span className="about-us-text63">10K+</span>
                    <span className="text-1 about-us-text64">Sales Calls</span>
                  </div>
                  <div className="about-us-container80">
                    <span className="about-us-text65">125K+</span>
                    <span className="text-1 about-us-text66">
                      Data enriched
                    </span>
                  </div>
                </div>
                <div className="about-us-container81">
                  <div className="about-us-container82">
                    <span className="about-us-text67">15+</span>
                    <span className="text-1 about-us-text68">
                      Years Experience
                    </span>
                  </div>
                  <div className="about-us-container83">
                    <span className="about-us-text69">8+</span>
                    <span className="text-1 about-us-text70">
                      ROI on average
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-us-container84 border-b">
            <div className="about-us-container85">
              <span className="about-us-text71 sub-titel-1">- Our Vision</span>
              <span className="about-us-text72 titel-2-mobil">
                Our Vision for Innovating CRM Software Solutions
              </span>
              <span className="about-us-text73 text-1">
                One of the primary functions of CRM software is to consolidate
                customer information from various sources, such as email, social
                media, website interactions, and sales transactions.
              </span>
            </div>
            <img alt="image" src="/img_2.svg" className="about-us-image09" />
            <div className="about-us-container86">
              <div className="about-us-container87">
                <div className="about-us-container88">
                  <svg viewBox="0 0 1024 1024" className="about-us-icon14">
                    <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                  </svg>
                </div>
                <span className="ueberschrift-3">
                  Automated AI based Cold Outreach
                </span>
              </div>
              <div className="about-us-container89">
                <div className="about-us-container90">
                  <svg viewBox="0 0 1024 1024" className="about-us-icon16">
                    <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                  </svg>
                </div>
                <span className="ueberschrift-3">
                  CRM Analysis for more Sales Opportunities
                </span>
              </div>
              <div className="about-us-container91">
                <div className="about-us-container92">
                  <svg viewBox="0 0 1024 1024" className="about-us-icon18">
                    <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                  </svg>
                </div>
                <span className="ueberschrift-3">
                  High Quality leads directly in your CRM
                </span>
              </div>
              <div className="about-us-container93">
                <div className="about-us-container94">
                  <svg viewBox="0 0 1024 1024" className="about-us-icon20">
                    <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                  </svg>
                </div>
                <span className="ueberschrift-3">
                  Continuous Expert Support
                </span>
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

export default AboutUs
