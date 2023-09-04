import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './dorpdown-box-component.css'

const DorpdownBoxComponent = (props) => {
  const [isVisible, setIsVisible] = useState(0)
  return (
    <div
      className={`dorpdown-box-component-dorpdown-box-component ${props.rootClassName} `}
    >
      <div className="dorpdown-box-component-container">
        <div className="dorpdown-box-component-container01">
          {isVisible === 0 && (
            <div className="dorpdown-box-component-container02">
              <span className="ueberschrift-3">Cold Email Outreach</span>
              <div className="dorpdown-box-component-container03"></div>
            </div>
          )}
          <div className="dorpdown-box-component-container04">
            <span className="ueberschrift-3">Cold Email Outreach</span>
            <div className="dorpdown-box-component-container05">
              <svg
                viewBox="0 0 1024 1024"
                onClick={() => setIsVisible(0)}
                className="dorpdown-box-component-icon"
              >
                <path
                  d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
        {isVisible === 0 && (
          <div className="dorpdown-box-component-container06">
            <span className="text-2">
              Especially for smaller teams it is crucial to determine your ICP
              and the Buyer Persona before starting automated outreach. we are
              the all-in-one solution for that.
            </span>
          </div>
        )}
      </div>
      <div className="dorpdown-box-component-container07">
        <div className="dorpdown-box-component-container08">
          {isVisible === 1 && (
            <div className="dorpdown-box-component-container09">
              <span className="ueberschrift-3">Automated Deal discovery</span>
              <div className="dorpdown-box-component-container10"></div>
            </div>
          )}
          <div className="dorpdown-box-component-container11">
            <span className="ueberschrift-3">Automated Deal discovery</span>
            <div className="dorpdown-box-component-container12">
              <svg
                viewBox="0 0 1024 1024"
                onClick={() => setIsVisible(1)}
                className="dorpdown-box-component-icon2"
              >
                <path
                  d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
        {isVisible === 1 && (
          <div className="dorpdown-box-component-container13">
            <span className="text-2">
              Especially for smaller teams it is crucial to determine your ICP
              and the Buyer Persona before starting automated outreach. we are
              the all-in-one solution for that.
            </span>
          </div>
        )}
      </div>
      <div className="dorpdown-box-component-container14">
        <div className="dorpdown-box-component-container15">
          {isVisible === 2 && (
            <div className="dorpdown-box-component-container16">
              <span className="ueberschrift-3">Continious support</span>
              <div className="dorpdown-box-component-container17"></div>
            </div>
          )}
          <div className="dorpdown-box-component-container18">
            <span className="ueberschrift-3">Continious support</span>
            <div className="dorpdown-box-component-container19">
              <svg
                viewBox="0 0 1024 1024"
                onClick={() => setIsVisible(2)}
                className="dorpdown-box-component-icon4"
              >
                <path
                  d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
        {isVisible === 2 && (
          <div className="dorpdown-box-component-container20">
            <span className="text-2">
              Especially for smaller teams it is crucial to determine your ICP
              and the Buyer Persona before starting automated outreach. we are
              the all-in-one solution for that.
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

DorpdownBoxComponent.defaultProps = {
  rootClassName: '',
}

DorpdownBoxComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default DorpdownBoxComponent
