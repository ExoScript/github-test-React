import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Traffls</title>
        <meta property="og:title" content="Page - Traffls" />
      </Helmet>
      <span>Error 404</span>
    </div>
  )
}

export default Page
