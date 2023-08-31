import React from 'react'

import { Helmet } from 'react-helmet'

import MenuBar from '../components/menu-bar'
import MenuBottomComponent from '../components/menu-bottom-component'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Up2Data</title>
        <meta property="og:title" content="Up2Data" />
      </Helmet>
      <div className="home-container001">
        <div className="home-container002">
          <MenuBar></MenuBar>
          <div className="home-container003">
            <div className="home-container004">
              <div className="home-container005">
                <span className="titel-1">
                  Thinking Growth differently for Ambitious companies
                </span>
                <span className="text-1">
                  For each stage of a companies growth we have the right tools
                  to get you one step ahead of your competition
                </span>
              </div>
              <div className="home-container006">
                <div className="home-container007">
                  <div className="home-container008">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="home-textinput input"
                    />
                  </div>
                  <div className="home-container009 gradient">
                    <span>Start free trail</span>
                  </div>
                </div>
                <span>30 day free trial - No credit card required</span>
              </div>
            </div>
            <div className="home-container010">
              <img
                alt="image"
                src="/group%201413372160-900w.png"
                className="home-image"
              />
            </div>
          </div>
        </div>
        <div className="home-container011">
          <div className="home-container012">
            <span className="home-text004">
              Our platform interacts with the CRMs that see the highest usage
              rates, ensuring optimal engagement.
            </span>
            <div className="home-container013">
              <span className="home-text005 titel-2">ClickUp</span>
              <span className="home-text006 titel-2">HubSpot</span>
              <span className="home-text007 titel-2">monday</span>
              <span className="home-text008 titel-2">Freshsales</span>
              <span className="home-text009 titel-2">salesforce</span>
              <span className="home-text010 titel-2">Less Annoying CRM</span>
              <span className="home-text011 titel-2">Zendesk</span>
              <span className="home-text012 titel-2">Active Campaign</span>
            </div>
          </div>
        </div>
        <div className="home-container014">
          <div className="home-container015">
            <div className="home-container016">
              <img
                alt="image"
                src="/group%201413372160-900w.png"
                className="home-image1"
              />
            </div>
            <div className="home-container017">
              <div className="home-container018">
                <span className="home-text013 sub-titel-1">ABOUT US</span>
                <span className="titel-2">About Up2Data</span>
                <span className="text-1">
                  <span>
                    After thousands of Sales deals in different stages of
                    companies, our mindset and our tools help companies sales
                    teams to grow more scalable
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container019">
                <div className="home-container020">
                  <div className="home-container021">
                    <div className="home-container022">
                      <svg viewBox="0 0 1024 1024" className="home-icon">
                        <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="home-container023">
                    <span className="ueberschrift-2">Our Mission</span>
                    <span className="text-2">
                      Getting the most out of your Sales department by having
                      the right tools at the right time
                    </span>
                  </div>
                </div>
                <div className="home-container024">
                  <div className="home-container025">
                    <div className="home-container026">
                      <svg viewBox="0 0 1024 1024" className="home-icon02">
                        <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="home-container027">
                    <span className="ueberschrift-2">Our Vision</span>
                    <span className="text-2">
                      Connecting the world of Sales to grow collaboratively in
                      an environment where everyone benefits
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-container028">
                <span className="home-text022">Get Started</span>
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container029">
          <div className="home-container030">
            <div className="home-container031">
              <span className="home-text023 titel-2">
                <span>Reliable data is the foundation of successful</span>
                <br></br>
                <span>sales outcomes</span>
              </span>
              <span className="home-text027 text-1">
                <span>
                  Our sources enable sales teams to get the right data at the
                  right time. It does not matter if you already
                </span>
                <br></br>
                <span>
                  have a fully fledged sales team or if you ar just starting, we
                  have the right tools for you.
                </span>
              </span>
            </div>
          </div>
          <div className="home-container032">
            <div className="home-container033">
              <div className="home-container034">
                <div className="home-container035">
                  <div className="home-container036"></div>
                  <span className="label-1">01</span>
                </div>
                <div className="home-container037">
                  <span className="ueberschrift-1">
                    <span>New high value leads</span>
                    <br></br>
                    <span>every week</span>
                  </span>
                </div>
                <div className="home-container038"></div>
                <div className="home-container039">
                  <span className="home-text036 text-2">
                    <span>We help analysing your current </span>
                    <span>customer base for potential new deals </span>
                    <span>via nearbound sales</span>
                  </span>
                </div>
              </div>
              <div className="home-container040">
                <div className="home-container041">
                  <div className="home-container042"></div>
                  <span className="label-1">02</span>
                </div>
                <div className="home-container043">
                  <span className="ueberschrift-1">
                    <span>Automated reach out</span>
                    <br></br>
                    <span>on a daily basis</span>
                  </span>
                </div>
                <div className="home-container044"></div>
                <div className="home-container045">
                  <span className="home-text045 text-2">
                    <span>For outbound sales we help you with an </span>
                    <span>automated send-out strategy that uses </span>
                    <span>AI to get better delivery rates</span>
                  </span>
                </div>
              </div>
              <div className="home-container046">
                <div className="home-container047">
                  <div className="home-container048"></div>
                  <span className="label-1">03</span>
                </div>
                <div className="home-container049">
                  <span className="ueberschrift-1">
                    <span>New high value leads</span>
                    <br></br>
                    <span>every week</span>
                  </span>
                </div>
                <div className="home-container050"></div>
                <div className="home-container051">
                  <span className="home-text054 text-2">
                    <span>Only the setup requires a little bit </span>
                    <span>collaboration After that it is a smooth </span>
                    <span>way of getting new leads into your CRM</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-container052">
              <div className="home-container053">
                <div className="home-container054">
                  <div className="home-container055"></div>
                  <span className="label-1">04</span>
                </div>
                <div className="home-container056">
                  <span className="ueberschrift-1">
                    <span>Works with every</span>
                    <br></br>
                    <span>CRM</span>
                  </span>
                </div>
                <div className="home-container057"></div>
                <div className="home-container058">
                  <span className="text-2">
                    <span>It does not matter which CRM you use.</span>
                    <br></br>
                    <span>We will setup an automated channel</span>
                    <br></br>
                    <span>that brings leads into your system</span>
                  </span>
                </div>
              </div>
              <div className="home-container059">
                <div className="home-container060">
                  <div className="home-container061"></div>
                  <span className="label-1">05</span>
                </div>
                <div className="home-container062">
                  <span className="ueberschrift-1">
                    <span>Higher ROI compared</span>
                    <br></br>
                    <span>to other initiatives</span>
                  </span>
                </div>
                <div className="home-container063"></div>
                <div className="home-container064">
                  <span className="text-2">
                    <span>Our philosophy is to make our customers </span>
                    <span>happy. You will mainly see that in ROIs </span>
                    <span>that you never excperienced</span>
                  </span>
                </div>
              </div>
              <div className="home-container065">
                <div className="home-container066">
                  <div className="home-container067"></div>
                  <span className="label-1">06</span>
                </div>
                <div className="home-container068">
                  <span className="ueberschrift-1">
                    Automated Lead and Enrichment Tool
                  </span>
                </div>
                <div className="home-container069"></div>
                <div className="home-container070">
                  <span className="text-2">
                    <span>By connecting your CRM you will finally</span>
                    <br></br>
                    <span>find out how outdated some of the data</span>
                    <br></br>
                    <span>are in there.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container071">
          <div className="home-container072">
            <div className="home-container073">
              <div className="home-container074">
                <span className="home-text086 sub-titel-1">Our Product</span>
                <span className="titel-2">
                  <span>Getting new</span>
                  <br></br>
                  <span>customers like magic</span>
                </span>
                <span className="text-1">
                  <span>Create a seamless integration between your</span>
                  <br></br>
                  <span>CRM system and maintain a constant flow of</span>
                  <br></br>
                  <span>
                    new highly qualified leads.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-container075">
                <div className="home-container076">
                  <div className="home-container077">
                    <svg viewBox="0 0 1024 1024" className="home-icon06">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-2">
                    Automated AI based Cold Outreach
                  </span>
                </div>
                <div className="home-container078">
                  <div className="home-container079">
                    <svg viewBox="0 0 1024 1024" className="home-icon08">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-2">
                    CRM Analysis for more Sales Opportunities
                  </span>
                </div>
                <div className="home-container080">
                  <div className="home-container081">
                    <svg viewBox="0 0 1024 1024" className="home-icon10">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-2">
                    High Quality leads directly in your CRM
                  </span>
                </div>
                <div className="home-container082">
                  <div className="home-container083">
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                    </svg>
                  </div>
                  <span className="ueberschrift-2">
                    Continuous Expert Support
                  </span>
                </div>
              </div>
              <div className="home-container084">
                <span className="home-text101">Get Started</span>
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
            <div className="home-container085">
              <img
                alt="image"
                src="/group%201413372216-700h.png"
                className="home-image2"
              />
            </div>
          </div>
        </div>
        <div className="home-container086">
          <div className="home-container087">
            <div className="home-container088">
              <span className="titel-2">
                Learn about our company success stories
              </span>
              <span className="home-text103 text-1">
                Start your sales journey today to get the most out of your
                efforts
              </span>
            </div>
            <div className="home-container089">
              <div className="home-container090">
                <div className="home-container091">
                  <div className="home-container092">
                    <div className="home-container093">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="home-image3"
                      />
                      <span className="home-text104">10K+</span>
                    </div>
                  </div>
                  <span className="home-text105">Sales Calls</span>
                </div>
                <div className="home-container094"></div>
                <div className="home-container095">
                  <div className="home-container096">
                    <div className="home-container097">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="home-image4"
                      />
                      <span className="home-text106">125K+</span>
                    </div>
                  </div>
                  <span className="home-text107">Data enriched</span>
                </div>
                <div className="home-container098"></div>
                <div className="home-container099">
                  <div className="home-container100">
                    <div className="home-container101">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="home-image5"
                      />
                      <span className="home-text108">15+</span>
                    </div>
                  </div>
                  <span className="home-text109">Years Experience</span>
                </div>
                <div className="home-container102"></div>
                <div className="home-container103">
                  <div className="home-container104">
                    <div className="home-container105">
                      <img
                        alt="image"
                        src="/vector.svg"
                        className="home-image6"
                      />
                      <span className="home-text110">8+</span>
                    </div>
                  </div>
                  <span className="home-text111">ROI on average</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container106">
          <div className="home-container107">
            <div className="home-container108">
              <div className="home-container109">
                <div className="home-container110">
                  <span className="home-text112 sub-titel-1">
                    ONGOING CONNECTIVITY
                  </span>
                  <span className="titel-2">
                    <span>Automatically get new</span>
                    <br></br>
                    <span>leads in your CRM system</span>
                  </span>
                </div>
              </div>
              <div className="home-container111">
                <div className="home-container112">
                  <span className="home-text117">Get Started</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="home-container113">
              <div className="home-container114">
                <img
                  alt="image"
                  src="/group%201413372149-600h.png"
                  className="home-image7"
                />
              </div>
              <div className="home-container115">
                <span className="text-1">
                  <span>
                    Create a seamless integration between your CRM system
                  </span>
                  <br></br>
                  <span>
                    and maintain a constant flow of leads. We help you from
                  </span>
                  <br></br>
                  <span>
                    defining your ICP to the outreach to thousands of potential
                  </span>
                  <br></br>
                  <span>
                    customers.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div
                  data-thq="thq-dropdown"
                  className="home-thq-dropdown list-item"
                >
                  <ul
                    data-thq="thq-dropdown-list"
                    className="home-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle"
                      >
                        <span className="home-text126">Sub-menu Item</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle1"
                      >
                        <span className="home-text127">Sub-menu Item</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="home-dropdown2 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle2"
                      >
                        <span className="home-text128">Sub-menu Item</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container116">
          <div className="home-container117">
            <div className="home-container118">
              <div className="home-container119">
                <div className="home-container120">
                  <span className="home-text129 sub-titel-1">
                    Blog and case study
                  </span>
                  <span className="titel-2">Our latest case study</span>
                </div>
              </div>
              <div className="home-container121">
                <div className="home-container122">
                  <span className="home-text131">Read All Blog</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="home-container123">
              <div className="home-container124">
                <div className="home-container125"></div>
                <div className="home-container126">
                  <div className="home-container127">
                    <div className="home-container128">
                      <span className="home-text132">IT Support</span>
                      <span className="home-text133">June 9, 2022</span>
                    </div>
                    <div className="home-container129"></div>
                  </div>
                  <div className="home-container130">
                    <span className="home-text134">
                      Being different in Sales is crucial for your success
                    </span>
                  </div>
                  <div className="home-container131">
                    <span className="home-text135">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="home-icon20">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="home-container132">
                <div className="home-container133"></div>
                <div className="home-container134">
                  <div className="home-container135">
                    <div className="home-container136">
                      <span className="home-text136">Marketing Consulting</span>
                      <span className="home-text137">June 9, 2022</span>
                    </div>
                    <div className="home-container137"></div>
                  </div>
                  <div className="home-container138">
                    <span className="home-text138">
                      Adding new ways of outreach can boost your growth
                    </span>
                  </div>
                  <div className="home-container139">
                    <span className="home-text139">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="home-icon22">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="home-container140">
                <div className="home-container141"></div>
                <div className="home-container142">
                  <div className="home-container143">
                    <div className="home-container144">
                      <span className="home-text140">Business Consulting</span>
                      <span className="home-text141">June 9, 2022</span>
                    </div>
                    <div className="home-container145"></div>
                  </div>
                  <div className="home-container146">
                    <span className="home-text142">
                      The right approach at the right time - how outreach can
                      change
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="home-container147">
                    <span className="home-text143">Read More</span>
                    <svg viewBox="0 0 1024 1024" className="home-icon24">
                      <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container148">
          <div className="home-container149">
            <div className="home-container150">
              <span className="titel-2">Subscribe Our Newsletter</span>
              <span className="home-text145 text-1">
                <span>
                  Enter your details to get business inspiration, trending
                  solutions,
                </span>
                <br></br>
                <span>and consulting tips delivered to your inbox</span>
              </span>
            </div>
            <div className="home-container151">
              <div className="home-container152">
                <span className="home-text149">Enter your email</span>
              </div>
              <div className="home-container153">
                <span className="home-text150">Subscribe</span>
                <svg viewBox="0 0 1024 1024" className="home-icon26">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <MenuBottomComponent rootClassName="menu-bottom-component-root-class-name"></MenuBottomComponent>
      </div>
    </div>
  )
}

export default Home
