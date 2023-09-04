import React from 'react'

import PropTypes from 'prop-types'

import './contact-us-mini-form-component.css'

const ContactUsMiniFormComponent = (props) => {
  return (
    <div className="contact-us-mini-form-component-contact-us-mini-form-component box-shadow-dark">
      <div className="contact-us-mini-form-component-container">
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="contact-us-mini-form-component-textinput input"
        />
      </div>
      <div className="contact-us-mini-form-component-container1 gradient">
        <span>{props.text}</span>
      </div>
    </div>
  )
}

ContactUsMiniFormComponent.defaultProps = {
  text: 'Contact us',
  textinput_placeholder: 'Enter your E-mail Address',
}

ContactUsMiniFormComponent.propTypes = {
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default ContactUsMiniFormComponent
