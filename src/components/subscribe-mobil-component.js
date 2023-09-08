import React from 'react'

import PropTypes from 'prop-types'

import './subscribe-mobil-component.css'

const SubscribeMobilComponent = (props) => {
  return (
    <div className="subscribe-mobil-component-subscribe-mobil-component">
      <div className="subscribe-mobil-component-container">
        <span className="subscribe-mobil-component-text titel-2-mobil">
          Subscribe Our Newsletter
        </span>
        <span className="subscribe-mobil-component-text1 text-1">
          Enter your details to get business inspiration, trending solutions,and
          consulting tips delivered to your inbox
        </span>
      </div>
      <div className="subscribe-mobil-component-container1">
        <div className="subscribe-mobil-component-container2">
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className="subscribe-mobil-component-textinput input"
          />
        </div>
        <div className="subscribe-mobil-component-container3">
          <span className="subscribe-mobil-component-text2">Subscribe</span>
          <svg
            viewBox="0 0 1024 1024"
            className="subscribe-mobil-component-icon"
          >
            <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

SubscribeMobilComponent.defaultProps = {
  text1:
    'Create a seamless integration between your CRM system and maintain a constant flow of leads. We help you from defining your ICP to the outreach to thousands of potential customers. ',
  text2: 'Subscribe',
  textinput_placeholder: 'Your full name',
  text: 'Subscribe Our Newsletter',
}

SubscribeMobilComponent.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
}

export default SubscribeMobilComponent
