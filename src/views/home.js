import React from 'react'

import { Helmet } from 'react-helmet'

import MenuBar from '../components/menu-bar'
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
                src="/group%201413372160-900h.png"
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
                src="/group%201413372160-900h.png"
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
        <div className="home-container154">
          <div className="home-container155">
            <div className="home-container156">
              <div className="home-container157">
                <div className="home-container158"></div>
                <span className="home-text151">
                  <span>Drive Sales by thinking</span>
                  <br></br>
                  <span>outside the box</span>
                </span>
              </div>
              <div className="home-container159">
                <span>FOLLOW US</span>
                <div className="home-container160">
                  <div className="home-container161">
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon28"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                  <div className="home-container162">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon30"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                  <div className="home-container163">
                    <svg viewBox="0 0 1024 1024" className="home-icon32">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                  <div className="home-container164">
                    <svg viewBox="0 0 1024 1024" className="home-icon34">
                      <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                      <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                      <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-container165">
              <div className="home-container166">
                <span className="home-text156">EXPLORE</span>
                <span className="home-text157">Home</span>
                <span className="home-text158">About Us</span>
                <span className="home-text159">Service</span>
                <span className="home-text160">Product</span>
                <span className="home-text161">Pricing</span>
                <span className="home-text162">Resources</span>
              </div>
              <div className="home-container167">
                <span className="home-text163">SUPPORT</span>
                <span className="home-text164">Help</span>
                <span className="home-text165">Contact Us</span>
                <span className="home-text166">Careers</span>
                <span className="home-text167">Terms Of Service</span>
                <span className="home-text168">Refund Policy</span>
                <span className="home-text169">Partners</span>
              </div>
              <div className="home-container168">
                <span className="home-text170">Contact info</span>
                <span className="home-text171">
                  <span>(702) 555-0122</span>
                  <br></br>
                  <span>(702) 555-0122</span>
                </span>
                <span className="home-text175">Up2Data@example.com</span>
                <span className="home-text176">
                  <span>3891 Ranchview Dr. Richardson,</span>
                  <br></br>
                  <span>California 62639</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container169">
          <div className="home-container170">
            <span>© 2023 Up2Data. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
