import React, { useState } from 'react'

import './home-container-1-component.css'

const HomeContainer1Component = (props) => {
  const [seeMore, setSeeMore] = useState(false)
  return (
    <div className="home-container-1-component-home-container-1-component">
      <div
        id="box-1"
        className="home-container-1-component-container box-shadow"
      >
        <div className="home-container-1-component-container01 border-b">
          <div className="home-container-1-component-container02">
            <svg
              viewBox="0 0 1024 1024"
              className="home-container-1-component-icon"
            >
              <path d="M854 896v-554h-684v554h684zM854 128q34 0 59 26t25 60v682q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-682q0-34 25-60t59-26h44v-86h84v86h428v-86h84v86h44z"></path>
            </svg>
          </div>
          <div className="home-container-1-component-container03">
            <span className="ueberschrift-1-mobil home-container-1-component-text">
              New high value leadsevery week
            </span>
          </div>
        </div>
        <div className="home-container-1-component-container04">
          <span className="home-container-1-component-text01 text-1">
            We help analysing your current customer base for potential new
            deals via nearbound sales
          </span>
        </div>
      </div>
      <div className="home-container-1-component-container05 box-shadow">
        <div className="home-container-1-component-container06 border-b">
          <div className="home-container-1-component-container07">
            <svg
              viewBox="0 0 1024 1024"
              className="home-container-1-component-icon02"
            >
              <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
            </svg>
          </div>
          <div className="home-container-1-component-container08">
            <span className="ueberschrift-1-mobil home-container-1-component-text02">
              Automated reach outon a daily basis
            </span>
          </div>
        </div>
        <div className="home-container-1-component-container09">
          <span className="home-container-1-component-text03 text-1">
            For outbound sales we help you with an automated send-out strategy
            that uses AI to get better delivery rates
          </span>
        </div>
      </div>
      {seeMore && (
        <div className="home-container-1-component-container10 box-shadow">
          <div className="home-container-1-component-container11 border-b">
            <div className="home-container-1-component-container12">
              <svg
                viewBox="0 0 1024 1024"
                className="home-container-1-component-icon04"
              >
                <path d="M896 448h16c26.4 0 48-21.6 48-48v-160c0-26.4-21.6-48-48-48h-16v-192h-128v192h-16c-26.4 0-48 21.6-48 48v160c0 26.4 21.6 48 48 48h16v576h128v-576zM768 256h128v128h-128v-128zM592 832c26.4 0 48-21.6 48-48v-160c0-26.4-21.6-48-48-48h-16v-576h-128v576h-16c-26.4 0-48 21.6-48 48v160c0 26.4 21.6 48 48 48h16v192h128v-192h16zM448 640h128v128h-128v-128zM272 448c26.4 0 48-21.6 48-48v-160c0-26.4-21.6-48-48-48h-16v-192h-128v192h-16c-26.4 0-48 21.6-48 48v160c0 26.4 21.6 48 48 48h16v576h128v-576h16zM128 256h128v128h-128v-128z"></path>
              </svg>
            </div>
            <div className="home-container-1-component-container13">
              <span className="ueberschrift-1-mobil home-container-1-component-text04">
                Almost no manualwork involved
              </span>
            </div>
          </div>
          <div className="home-container-1-component-container14">
            <span className="home-container-1-component-text05 text-1">
              Only the setup requires a little bit collaboration After that it
              is a smooth way of getting new leads into your CRM
            </span>
          </div>
        </div>
      )}
      {seeMore && (
        <div className="home-container-1-component-container15 box-shadow">
          <div className="home-container-1-component-container16 border-b">
            <div className="home-container-1-component-container17">
              <svg
                viewBox="0 0 1024 1024"
                className="home-container-1-component-icon06"
              >
                <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51z"></path>
              </svg>
            </div>
            <div className="home-container-1-component-container18">
              <span className="ueberschrift-1-mobil home-container-1-component-text06">
                Works with every CRM
              </span>
            </div>
          </div>
          <div className="home-container-1-component-container19">
            <span className="home-container-1-component-text07 text-1">
              We help analysing your current customer base for potential new
              deals via nearbound sales
            </span>
          </div>
        </div>
      )}
      {seeMore && (
        <div className="home-container-1-component-container20 box-shadow">
          <div className="home-container-1-component-container21 border-b">
            <div className="home-container-1-component-container22">
              <svg
                viewBox="0 0 1170.2857142857142 1024"
                className="home-container-1-component-icon08"
              >
                <path d="M365.714 512v292.571h-146.286v-292.571h146.286zM585.143 219.429v585.143h-146.286v-585.143h146.286zM1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM804.571 365.714v438.857h-146.286v-438.857h146.286zM1024 146.286v658.286h-146.286v-658.286h146.286z"></path>
              </svg>
            </div>
            <div className="home-container-1-component-container23">
              <span className="ueberschrift-1-mobil home-container-1-component-text08">
                Higher ROI compared to other initiatives
              </span>
            </div>
          </div>
          <div className="home-container-1-component-container24">
            <span className="home-container-1-component-text09 text-1">
              For outbound sales we help you with an automated send-out strategy
              that uses AI to get better delivery rates
            </span>
          </div>
        </div>
      )}
      {seeMore && (
        <div className="home-container-1-component-container25 box-shadow">
          <div className="home-container-1-component-container26 border-b">
            <div className="home-container-1-component-container27">
              <svg
                viewBox="0 0 512.5851428571428 1024"
                className="home-container-1-component-icon10"
              >
                <path d="M505.714 323.429c6.286 6.857 8 16.571 4 25.143l-308.571 661.143c-4.571 8.571-13.714 14.286-24 14.286-2.286 0-5.143-0.571-8-1.143-12.571-4-20-16-17.143-28l112.571-461.714-232 57.714c-2.286 0.571-4.571 0.571-6.857 0.571-6.286 0-13.143-2.286-17.714-6.286-6.857-5.714-9.143-14.286-7.429-22.286l114.857-471.429c2.857-10.857 13.143-18.286 25.143-18.286h187.429c14.286 0 25.714 10.857 25.714 24 0 3.429-1.143 6.857-2.857 10.286l-97.714 264.571 226.286-56c2.286-0.571 4.571-1.143 6.857-1.143 7.429 0 14.286 3.429 19.429 8.571z"></path>
              </svg>
            </div>
            <div className="home-container-1-component-container28">
              <span className="ueberschrift-1-mobil home-container-1-component-text10">
                Automated Lead and Enrichment Tool
              </span>
            </div>
          </div>
          <div className="home-container-1-component-container29">
            <span className="home-container-1-component-text11 text-1">
              For outbound sales we help you with an automated send-out strategy
              that uses AI to get better delivery rates
            </span>
          </div>
        </div>
      )}
      {seeMore && (
        <a href="#box-1" className="home-container-1-component-link">
          <div
            onClick={() => setSeeMore(false)}
            className="home-container-1-component-button-blue button-blue"
          >
            <span className="text-1">See less</span>
            <svg
              viewBox="0 0 1024 1024"
              className="home-container-1-component-icon12"
            >
              <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
            </svg>
          </div>
        </a>
      )}
      {!seeMore && (
        <div onClick={() => setSeeMore(true)} className="button-blue">
          <span className="text-1">See more</span>
          <svg
            viewBox="0 0 1024 1024"
            className="home-container-1-component-icon14"
          >
            <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
          </svg>
        </div>
      )}
    </div>
  )
}

export default HomeContainer1Component
