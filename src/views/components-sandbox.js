import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import DorpdownBoxComponent from '../components/dorpdown-box-component'
import './components-sandbox.css'

const ComponentsSandbox = (props) => {
  return (
    <div className="components-sandbox-container">
      <Helmet>
        <title>Components-Sandbox - Traffls</title>
        <meta property="og:title" content="Components-Sandbox - Traffls" />
      </Helmet>
      <div className="components-sandbox-container001">
        <div className="components-sandbox-buttons">
          <div className="components-sandbox-btn">
            <div className="components-sandbox-container002 gradient">
              <span>Buttons</span>
            </div>
            <div className="components-sandbox-container003">
              <div className="components-sandbox-container004">
                <span className="components-sandbox-text001">Get Started</span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="components-sandbox-icon"
                >
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
              <div className="components-sandbox-container005">
                <span className="components-sandbox-text002">Get Started</span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="components-sandbox-icon02"
                >
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="components-sandbox-btn1">
            <div className="components-sandbox-container006 gradient">
              <span>Check Box</span>
            </div>
            <div className="components-sandbox-container007">
              <div className="components-sandbox-container008">
                <svg
                  viewBox="0 0 1024 1024"
                  className="components-sandbox-icon04"
                >
                  <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
              <div className="components-sandbox-container009">
                <svg
                  viewBox="0 0 1024 1024"
                  className="components-sandbox-icon06"
                >
                  <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="components-sandbox-text004">
          <div className="components-sandbox-container010 gradient">
            <span>Text-Style</span>
          </div>
          <div className="components-sandbox-container011">
            <span className="titel-1">titel-1</span>
            <div className="components-sandbox-container012">
              <div className="components-sandbox-container013">
                <span className="components-sandbox-text007">Font:</span>
                <span>poppins</span>
              </div>
              <div className="components-sandbox-container014">
                <span className="components-sandbox-text009">Weight:</span>
                <span>600</span>
              </div>
              <div className="components-sandbox-container015">
                <span className="components-sandbox-text011">Size:</span>
                <span>60px</span>
              </div>
              <div className="components-sandbox-container016">
                <span className="components-sandbox-text013">Line-Height</span>
                <span>74px</span>
              </div>
            </div>
          </div>
          <div className="components-sandbox-container017">
            <span className="titel-2">titel-2</span>
            <div className="components-sandbox-container018">
              <div className="components-sandbox-container019">
                <span className="components-sandbox-text016">Font:</span>
                <span>poppins</span>
              </div>
              <div className="components-sandbox-container020">
                <span className="components-sandbox-text018">Weight:</span>
                <span>600</span>
              </div>
              <div className="components-sandbox-container021">
                <span className="components-sandbox-text020">Size:</span>
                <span>48px</span>
              </div>
              <div className="components-sandbox-container022">
                <span className="components-sandbox-text022">Line-Height</span>
                <span>60px</span>
              </div>
            </div>
          </div>
          <div className="components-sandbox-container023">
            <span className="titel-text-1">titel-text-1</span>
            <div className="components-sandbox-container024">
              <div className="components-sandbox-container025">
                <span className="components-sandbox-text025">Font:</span>
                <span>poppins</span>
              </div>
              <div className="components-sandbox-container026">
                <span className="components-sandbox-text027">Weight:</span>
                <span>600</span>
              </div>
              <div className="components-sandbox-container027">
                <span className="components-sandbox-text029">Size:</span>
                <span>60px</span>
              </div>
              <div className="components-sandbox-container028">
                <span className="components-sandbox-text031">Line-Height</span>
                <span>74px</span>
              </div>
            </div>
          </div>
          <div className="components-sandbox-container029">
            <span className="ueberschrift-1">ueberschrift-1</span>
            <div className="components-sandbox-container030">
              <div className="components-sandbox-container031">
                <span className="components-sandbox-text034">Font:</span>
                <span>inter</span>
              </div>
              <div className="components-sandbox-container032">
                <span className="components-sandbox-text036">Weight:</span>
                <span>600</span>
              </div>
              <div className="components-sandbox-container033">
                <span className="components-sandbox-text038">Size:</span>
                <span>30px</span>
              </div>
              <div className="components-sandbox-container034">
                <span className="components-sandbox-text040">Line-Height</span>
                <span>40px</span>
              </div>
            </div>
          </div>
          <div className="components-sandbox-container035">
            <span className="ueberschrift-2">ueberschrift-2</span>
            <div className="components-sandbox-container036">
              <div className="components-sandbox-container037">
                <span className="components-sandbox-text043">Font:</span>
                <span>inter</span>
              </div>
              <div className="components-sandbox-container038">
                <span className="components-sandbox-text045">Weight:</span>
                <span>600</span>
              </div>
              <div className="components-sandbox-container039">
                <span className="components-sandbox-text047">Size:</span>
                <span>22px</span>
              </div>
              <div className="components-sandbox-container040">
                <span className="components-sandbox-text049">Line-Height</span>
                <span>28px</span>
              </div>
            </div>
          </div>
          <div className="components-sandbox-container041">
            <span className="sub-titel-1">sub-titel</span>
            <div className="components-sandbox-container042">
              <div className="components-sandbox-container043">
                <span className="components-sandbox-text052">Font:</span>
                <span>poppins</span>
              </div>
              <div className="components-sandbox-container044">
                <span className="components-sandbox-text054">Weight:</span>
                <span>600</span>
              </div>
              <div className="components-sandbox-container045">
                <span className="components-sandbox-text056">Size:</span>
                <span>16px</span>
              </div>
              <div className="components-sandbox-container046">
                <span className="components-sandbox-text058">Line-Height</span>
                <span>24px</span>
              </div>
            </div>
          </div>
          <div className="components-sandbox-container047">
            <span className="text-1">text-1</span>
            <div className="components-sandbox-container048">
              <div className="components-sandbox-container049">
                <span className="components-sandbox-text061">Font:</span>
                <span>inter</span>
              </div>
              <div className="components-sandbox-container050">
                <span className="components-sandbox-text063">Weight:</span>
                <span>400</span>
              </div>
              <div className="components-sandbox-container051">
                <span className="components-sandbox-text065">Size:</span>
                <span>20px</span>
              </div>
              <div className="components-sandbox-container052">
                <span className="components-sandbox-text067">Line-Height</span>
                <span>36px</span>
              </div>
            </div>
          </div>
          <div className="components-sandbox-container053">
            <span className="text-2">text-2</span>
            <div className="components-sandbox-container054">
              <div className="components-sandbox-container055">
                <span className="components-sandbox-text070">Font:</span>
                <span>inter</span>
              </div>
              <div className="components-sandbox-container056">
                <span className="components-sandbox-text072">Weight:</span>
                <span>400</span>
              </div>
              <div className="components-sandbox-container057">
                <span className="components-sandbox-text074">Size:</span>
                <span>18px</span>
              </div>
              <div className="components-sandbox-container058">
                <span className="components-sandbox-text076">Line-Height</span>
                <span>32px</span>
              </div>
            </div>
          </div>
        </div>
        <div className="components-sandbox-container059">
          <div className="components-sandbox-container060">
            <div className="components-sandbox-container061">
              <img
                alt="img"
                src="/group%201413372160-1500w.png"
                loading="lazy"
                className="components-sandbox-image"
              />
            </div>
            <div className="components-sandbox-container062">
              <div className="components-sandbox-container063">
                <span className="components-sandbox-text078 sub-titel-1">
                  sub-titel
                </span>
                <span className="titel-2">titel-2</span>
              </div>
              <div className="components-sandbox-container064">
                <span className="text-1">
                  text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 
                </span>
              </div>
              <div className="components-sandbox-container065">
                <div className="components-sandbox-container066">
                  <div className="components-sandbox-container067">
                    <div className="components-sandbox-container068">
                      <div className="components-sandbox-container069">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="components-sandbox-icon08"
                        >
                          <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="components-sandbox-container070">
                    <div className="components-sandbox-container071">
                      <span className="ueberschrift-2">Ueberschrift-2</span>
                    </div>
                    <div className="components-sandbox-container072">
                      <span className="text-2">text-2</span>
                    </div>
                  </div>
                </div>
                <div className="components-sandbox-container073">
                  <div className="components-sandbox-container074">
                    <div className="components-sandbox-container075">
                      <div className="components-sandbox-container076">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="components-sandbox-icon10"
                        >
                          <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="components-sandbox-container077">
                    <div className="components-sandbox-container078">
                      <span className="ueberschrift-2">Ueberschrift-2</span>
                    </div>
                    <div className="components-sandbox-container079">
                      <span className="text-2">text-2</span>
                    </div>
                  </div>
                </div>
                <div className="components-sandbox-container080">
                  <div className="components-sandbox-container081">
                    <div className="components-sandbox-container082">
                      <div className="components-sandbox-container083">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="components-sandbox-icon12"
                        >
                          <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="components-sandbox-container084">
                    <div className="components-sandbox-container085">
                      <span className="ueberschrift-2">Ueberschrift-2</span>
                    </div>
                    <div className="components-sandbox-container086">
                      <span className="text-2">text-2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="components-sandbox-container087">
                <span className="components-sandbox-text087">Get Started</span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="components-sandbox-icon14"
                >
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="components-sandbox-container088">
            <div className="components-sandbox-container089">
              <div className="components-sandbox-container090">
                <span className="components-sandbox-text088 sub-titel-1">
                  sub-titel
                </span>
                <span className="titel-2">titel-2</span>
              </div>
              <div className="components-sandbox-container091">
                <span className="text-1">
                  text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 text-1 
                </span>
              </div>
              <div className="components-sandbox-container092">
                <div className="components-sandbox-container093">
                  <div className="components-sandbox-container094">
                    <div className="components-sandbox-container095">
                      <div className="components-sandbox-container096">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="components-sandbox-icon16"
                        >
                          <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="components-sandbox-container097">
                    <div className="components-sandbox-container098">
                      <span className="ueberschrift-2">Ueberschrift-2</span>
                    </div>
                    <div className="components-sandbox-container099">
                      <span className="text-2">text-2</span>
                    </div>
                  </div>
                </div>
                <div className="components-sandbox-container100">
                  <div className="components-sandbox-container101">
                    <div className="components-sandbox-container102">
                      <div className="components-sandbox-container103">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="components-sandbox-icon18"
                        >
                          <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="components-sandbox-container104">
                    <div className="components-sandbox-container105">
                      <span className="ueberschrift-2">Ueberschrift-2</span>
                    </div>
                    <div className="components-sandbox-container106">
                      <span className="text-2">text-2</span>
                    </div>
                  </div>
                </div>
                <div className="components-sandbox-container107">
                  <div className="components-sandbox-container108">
                    <div className="components-sandbox-container109">
                      <div className="components-sandbox-container110">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="components-sandbox-icon20"
                        >
                          <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="components-sandbox-container111">
                    <div className="components-sandbox-container112">
                      <span className="ueberschrift-2">Ueberschrift-2</span>
                    </div>
                    <div className="components-sandbox-container113">
                      <span className="text-2">text-2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="components-sandbox-container114">
                <span className="components-sandbox-text097">Get Started</span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="components-sandbox-icon22"
                >
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
            <div className="components-sandbox-container115">
              <img
                alt="img"
                src="/group%201413372160-1500w.png"
                loading="lazy"
                className="components-sandbox-image1"
              />
            </div>
          </div>
        </div>
        <div className="components-sandbox-container116">
          <div className="components-sandbox-container117">
            <div className="components-sandbox-container118">
              <div className="components-sandbox-container119"></div>
              <span className="components-sandbox-text098">04</span>
            </div>
            <div className="components-sandbox-container120">
              <span className="components-sandbox-text099">
                <span>Works with every</span>
                <br></br>
                <span>CRM</span>
              </span>
            </div>
            <div className="components-sandbox-container121"></div>
            <div className="components-sandbox-container122">
              <span className="components-sandbox-text103">
                <span>It does not matter which CRM you use.</span>
                <br></br>
                <span>We will setup an automated channel</span>
                <br></br>
                <span>that brings leads into your system</span>
              </span>
            </div>
          </div>
          <div className="components-sandbox-container123">
            <div className="components-sandbox-container124">
              <div className="components-sandbox-container125"></div>
              <span className="components-sandbox-text109">04</span>
            </div>
            <div className="components-sandbox-container126">
              <span className="components-sandbox-text110">
                <span>Works with every</span>
                <br></br>
                <span>CRM</span>
              </span>
            </div>
            <div className="components-sandbox-container127"></div>
            <div className="components-sandbox-container128">
              <span className="components-sandbox-text114">
                <span>It does not matter which CRM you use.</span>
                <br></br>
                <span>We will setup an automated channel</span>
                <br></br>
                <span>that brings leads into your system</span>
              </span>
            </div>
          </div>
          <div className="components-sandbox-container129">
            <div className="components-sandbox-container130">
              <div className="components-sandbox-container131"></div>
            </div>
            <div className="components-sandbox-container132">
              <span className="components-sandbox-text120">
                <span>Works with every</span>
                <br></br>
              </span>
            </div>
            <div className="components-sandbox-container133"></div>
            <div className="components-sandbox-container134">
              <span className="components-sandbox-text123">
                <span>It does not matter which CRM you use.</span>
                <br></br>
                <span>We will setup an automated channel</span>
                <br></br>
                <span>that brings leads into your system</span>
              </span>
            </div>
          </div>
          <div className="components-sandbox-container135">
            <div className="components-sandbox-container136"></div>
            <div className="components-sandbox-container137">
              <div className="components-sandbox-container138">
                <div className="components-sandbox-container139">
                  <span className="components-sandbox-text129">IT Support</span>
                  <span className="components-sandbox-text130">
                    June 9, 2022
                  </span>
                </div>
                <div className="components-sandbox-container140"></div>
              </div>
              <div className="components-sandbox-container141">
                <span className="components-sandbox-text131">
                  Being different in Sales is crucial for your success
                </span>
              </div>
              <div className="components-sandbox-container142">
                <span className="components-sandbox-text132">Read More</span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="components-sandbox-icon24"
                >
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="components-sandbox-container143">
          <div className="components-sandbox-container144">
            <Player
              src="https://lottie.host/74f28f89-d3dc-4a7a-aee2-8afb193a6946/rXoA68opHK.json"
              speed="1"
              autoplay
              background="transparent"
              className="components-sandbox-lottie-node"
            ></Player>
          </div>
        </div>
        <div className="components-sandbox-dropdown">
          <div className="components-sandbox-container145 box-shadow">
            <div className="components-sandbox-container146">
              <div className="components-sandbox-container147 gradient">
                <span className="text-2">Product - 1</span>
                <span className="text-1">Mail Outreach</span>
              </div>
              <div className="components-sandbox-container148">
                <span className="text-2">Product - 2</span>
                <span className="text-1">Nearbound</span>
              </div>
            </div>
            <div className="components-sandbox-container149"></div>
            <div className="components-sandbox-container150">
              <span className="ueberschrift-2">
                Outbound sales is incredible - we help you to scale it
              </span>
              <span className="text-2">
                You need 3 things to scale - the right ICP, the right Buyer
                Persona, and a System that automatically sends out Mail
                Sequences to these people and continuously optimizes the
                outreach
              </span>
              <div className="components-sandbox-container151">
                <span className="components-sandbox-text139">
                  Get more information
                </span>
                <svg
                  viewBox="0 0 1024 1024"
                  className="components-sandbox-icon26"
                >
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="components-sandbox-container152">
          <DorpdownBoxComponent></DorpdownBoxComponent>
        </div>
      </div>
    </div>
  )
}

export default ComponentsSandbox
