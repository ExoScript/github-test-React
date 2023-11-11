import React from 'react'

import { Helmet } from 'react-helmet'

import './error.css'

const Error = (props) => {
  return (
    <div className="error-container">
      <Helmet>
        <title>error - Traffls</title>
        <meta property="og:title" content="error - Traffls" />
      </Helmet>
      <span>Error 404</span>
    </div>
  )
}

export default Error
