import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import CampaignPerformanceComponent from '../components/campaign-performance-component'
import './dashboard.css'

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard - Traffls</title>
        <meta property="og:title" content="Dashboard - Traffls" />
      </Helmet>
      <div className="dashboard-container01">
        <div className="dashboard-container02">
          <div className="dashboard-container03">
            <div className="dashboard-container04">
              <img
                alt="image"
                src="/up2datalogo%20%5B1%5D-200h-200h.png"
                className="dashboard-image"
              />
            </div>
            <span className="ueberschrift-2">Traffls</span>
          </div>
          <div className="dashboard-container05">
            <Link to="/about-us" className="dashboard-navlink">
              <div className="menu-btn-enable">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon">
                  <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
                </svg>
                <span className="dashboard-text01 text-2">Dashboard</span>
              </div>
            </Link>
            <Link to="/about-us" className="dashboard-navlink1">
              <div className="menu-btn-disable">
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className="dashboard-icon02"
                >
                  <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
                </svg>
                <span className="dashboard-text02 text-2 text-1">Customer</span>
              </div>
            </Link>
            <Link to="/about-us" className="dashboard-navlink2">
              <div className="menu-btn-disable">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon04">
                  <path d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"></path>
                </svg>
                <span className="dashboard-text03 text-2 text-1">Order</span>
              </div>
            </Link>
            <Link to="/about-us" className="dashboard-navlink3">
              <div className="menu-btn-disable">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon06">
                  <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                </svg>
                <span className="dashboard-text04 text-2 text-1">Products</span>
              </div>
            </Link>
            <Link to="/about-us" className="dashboard-navlink4">
              <div className="menu-btn-disable">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon08">
                  <path d="M426 342v-86h256q34 0 60 26t26 60v256h-86v-256h-256zM938 768h-170v86h86l-128 128-128-128h84v-86h-340q-34 0-60-26t-26-60v-340h-170v-86h170v-86h-86l128-128 128 128h-84v512h596v86z"></path>
                </svg>
                <span className="dashboard-text05 text-2 text-1">
                  Transaction
                </span>
              </div>
            </Link>
          </div>
          <div className="dashboard-container11">
            <Link to="/about-us" className="dashboard-navlink5">
              <div className="dashboard-container12 menu-btn-disable">
                <div className="dashboard-container13">
                  <svg viewBox="0 0 1024 1024" className="dashboard-icon10">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="dashboard-text06 text-2 text-1">Inbox</span>
                </div>
                <svg viewBox="0 0 1024 1024" className="dashboard-icon12">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </Link>
            <Link to="/about-us" className="dashboard-navlink6">
              <div className="menu-btn-disable">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon14">
                  <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
                </svg>
                <span className="dashboard-text07 text-2 text-1">settings</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="dashboard-container15">
          <div className="dashboard-container16">
            <div className="dashboard-container17">
              <svg viewBox="0 0 1024 1024" className="dashboard-icon16">
                <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
              </svg>
              <span className="dashboard-text08 text-2">Search here...</span>
            </div>
            <div className="dashboard-container18">
              <div className="dashboard-container19">
                <svg viewBox="0 0 1024 1024" className="dashboard-icon18">
                  <path d="M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM140.571 804.571h742.857c-102.286-115.429-152-272-152-475.429 0-73.714-69.714-182.857-219.429-182.857s-219.429 109.143-219.429 182.857c0 203.429-49.714 360-152 475.429zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"></path>
                </svg>
              </div>
              <div className="dashboard-container20">
                <div className="dashboard-container21">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHVzZXJ8ZW58MHx8fHwxNjkzNDg3NjY4fDA&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="dashboard-image1"
                  />
                </div>
                <div className="dashboard-container22">
                  <span className="dashboard-text09 text-2">Daniel D.</span>
                  <svg viewBox="0 0 1024 1024" className="dashboard-icon20">
                    <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-container23">
            <div className="dashboard-container24">
              <div className="dashboard-container25">
                <span className="ueberschrift-2">Campaign Performance</span>
                <div className="dashboard-container26">
                  <div className="dashboard-container27">
                    <svg viewBox="0 0 1024 1024" className="dashboard-icon22">
                      <path d="M182 242q-12-14-12-28 0-18 13-31t31-13h596q18 0 31 13t13 31q2 12-10 26l-246 314v256q0 18-12 31t-30 13h-86q-18 0-31-13t-13-31v-256q-240-306-244-312z"></path>
                    </svg>
                    <span className="text-2">Filter</span>
                  </div>
                  <div className="dashboard-container28">
                    <svg viewBox="0 0 1024 1024" className="dashboard-icon24">
                      <path d="M854 896v-554h-684v554h684zM854 128q34 0 59 26t25 60v682q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-682q0-34 25-60t59-26h44v-86h84v86h428v-86h84v86h44z"></path>
                    </svg>
                    <span className="text-2">Last 4 weeks</span>
                  </div>
                  <div className="dashboard-container29">
                    <svg viewBox="0 0 1024 1024" className="dashboard-icon26">
                      <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
                    </svg>
                    <span className="text-2">Custom range</span>
                  </div>
                  <div className="dashboard-container30">
                    <svg viewBox="0 0 1024 1024" className="dashboard-icon28">
                      <path d="M691.797 772.181c1.067-1.408 2.048-2.859 2.987-4.437 0.853-1.493 1.621-3.029 2.304-4.565 3.115-4.608 6.656-8.917 10.581-12.843 15.488-15.488 36.736-25.003 60.331-25.003s44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331c0-13.867 3.285-26.923 9.131-38.485zM695.509 258.389c-0.384-0.725-0.768-1.451-1.195-2.176s-0.853-1.451-1.323-2.133c-6.571-12.075-10.325-25.941-10.325-40.747 0-23.595 9.515-44.843 25.003-60.331s36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331-9.515 44.843-25.003 60.331-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003c-4.608-4.608-8.704-9.728-12.16-15.275zM328.491 466.944c0.384 0.725 0.768 1.451 1.195 2.176s0.853 1.451 1.323 2.133c6.571 12.075 10.325 25.941 10.325 40.747s-3.755 28.672-10.368 40.789c-0.469 0.683-0.896 1.408-1.323 2.133s-0.811 1.408-1.152 2.133c-3.456 5.547-7.552 10.667-12.16 15.275-15.488 15.488-36.736 25.003-60.331 25.003s-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003c4.608 4.608 8.704 9.728 12.16 15.275zM603.733 259.755l-226.475 132.139c-0.171-0.213-0.384-0.384-0.597-0.597-30.805-30.805-73.557-49.963-120.661-49.963s-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005c0.213-0.213 0.384-0.384 0.597-0.597l226.517 132.011c-4.181 14.805-6.443 30.464-6.443 46.592 0 47.104 19.157 89.856 50.005 120.661s73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005c-0.128 0.128-0.299 0.299-0.427 0.427l-226.645-132.053c4.181-14.763 6.4-30.293 6.4-46.379s-2.219-31.659-6.4-46.421l226.475-132.181c0.171 0.213 0.384 0.384 0.597 0.597 30.805 30.848 73.557 50.005 120.661 50.005s89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661-19.157-89.856-50.005-120.661-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661c0 16.085 2.219 31.659 6.4 46.421z"></path>
                    </svg>
                    <span className="text-2">Share</span>
                  </div>
                </div>
              </div>
              <div className="dashboard-container31">
                <div className="dashboard-container32">
                  <div className="dashboard-container33">
                    <span className="dashboard-text15 text-2">Campaign</span>
                  </div>
                  <div className="dashboard-container34">
                    <span className="dashboard-text16 text-2">Status</span>
                  </div>
                  <div className="dashboard-container35">
                    <span className="dashboard-text17 text-2">Contacted</span>
                  </div>
                  <div className="dashboard-container36">
                    <span className="dashboard-text18 text-2">Opened</span>
                  </div>
                  <div className="dashboard-container37">
                    <span className="dashboard-text19 text-2">
                      Link Clicked
                    </span>
                  </div>
                  <div className="dashboard-container38">
                    <span className="dashboard-text20 text-2">Replied</span>
                  </div>
                  <div className="dashboard-container39">
                    <span className="dashboard-text21 text-2">
                      Opportunities
                    </span>
                  </div>
                  <div className="dashboard-container40"></div>
                </div>
                <div className="dashboard-container41">
                  <ul className="list dashboard-ul">
                    <li className="list-item dashboard-li">
                      <CampaignPerformanceComponent
                        clicked="0"
                        reploed_count="6"
                        replied_percent="0.2%"
                      ></CampaignPerformanceComponent>
                    </li>
                    <li className="list-item dashboard-li1">
                      <CampaignPerformanceComponent
                        name="Campaign 2"
                        contacted="998"
                        opened_count="787"
                        Opportunities="1"
                        reploed_count="9"
                        opened_percent="78.9%"
                        replied_percent="0.9%"
                      ></CampaignPerformanceComponent>
                    </li>
                    <li className="list-item dashboard-li2">
                      <CampaignPerformanceComponent
                        name="Campaign 3"
                        contacted="512"
                        opened_count="319"
                        Opportunities="1"
                        reploed_count="3"
                        opened_percent="62.3%"
                        replied_percent="0.6%"
                      ></CampaignPerformanceComponent>
                    </li>
                    <li className="list-item dashboard-li3">
                      <CampaignPerformanceComponent
                        name="Test Campaign 1"
                        contacted="3.160"
                        opened_count="993"
                        Opportunities="0"
                        reploed_count="7"
                        opened_percent="80.4%"
                        replied_percent="0.6%"
                      ></CampaignPerformanceComponent>
                    </li>
                    <li className="list-item dashboard-li4">
                      <CampaignPerformanceComponent
                        name="Campaign - Germany"
                        contacted="687"
                        opened_count="314"
                        Opportunities="0"
                        reploed_count="3"
                        opened_percent="45.7%"
                        replied_percent="0.4%"
                      ></CampaignPerformanceComponent>
                    </li>
                    <li className="list-item dashboard-li5">
                      <CampaignPerformanceComponent
                        name="Campaign - Startups"
                        contacted="1.000"
                        opened_count="503"
                        Opportunities="0"
                        reploed_count="3"
                        opened_percent="50.3%"
                        replied_percent="0.2%"
                      ></CampaignPerformanceComponent>
                    </li>
                    <li className="list-item dashboard-li6">
                      <CampaignPerformanceComponent
                        name="Campaign - CEOs"
                        contacted="702"
                        opened_count="503"
                        Opportunities="0"
                        reploed_count="4"
                        opened_percent="54.1%"
                        replied_percent="0.2%"
                      ></CampaignPerformanceComponent>
                    </li>
                    <li className="list-item dashboard-li7">
                      <CampaignPerformanceComponent
                        name="Whitepaper Campaign"
                        contacted="579"
                        opened_count="467"
                        Opportunities="0"
                        reploed_count="1"
                        opened_percent="63.4%"
                        replied_percent="0.2%"
                      ></CampaignPerformanceComponent>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
