import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Up2Data</title>
        <meta property="og:title" content="Page - Up2Data" />
      </Helmet>
      <span>Error 404</span>
    </div>
  )
}

export default Page
