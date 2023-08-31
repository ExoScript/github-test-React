import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './campaign-performance-component.css'

const CampaignPerformanceComponent = (props) => {
  const [status, setStatus] = useState(false)
  return (
    <div className="campaign-performance-component-campaign-performance-component">
      <div className="campaign-performance-component-container">
        <span className="text-2">{props.name}</span>
      </div>
      <div className="campaign-performance-component-container01">
        {!status && (
          <div className="campaign-performance-component-container02">
            <span className="text-2">Paused</span>
          </div>
        )}
        {status && (
          <div className="campaign-performance-component-container03">
            <span className="text-2">Active</span>
          </div>
        )}
      </div>
      <div className="campaign-performance-component-container04">
        <span className="campaign-performance-component-text03 text-2">
          {props.contacted}
        </span>
      </div>
      <div className="campaign-performance-component-container05">
        <span className="campaign-performance-component-text04 text-2">
          {props.opened_count}
        </span>
        <div className="campaign-performance-component-container06"></div>
        <span className="text-2">{props.opened_percent}</span>
      </div>
      <div className="campaign-performance-component-container07">
        <span className="campaign-performance-component-text06 text-2">
          {props.clicked}
        </span>
      </div>
      <div className="campaign-performance-component-container08">
        <span className="campaign-performance-component-text07 text-2">
          {props.reploed_count}
        </span>
        <div className="campaign-performance-component-container09"></div>
        <span className="text-2">{props.replied_percent}</span>
      </div>
      <div className="campaign-performance-component-container10">
        <span className="campaign-performance-component-text09 text-2">
          {props.Opportunities}
        </span>
      </div>
      <div className="campaign-performance-component-container11">
        <div
          onClick={() => setStatus(!status)}
          className="campaign-performance-component-container12"
        >
          {!status && (
            <svg
              viewBox="0 0 1024 1024"
              className="campaign-performance-component-icon"
            >
              <path d="M342 214l468 298-468 298v-596z"></path>
            </svg>
          )}
          {status && (
            <svg
              viewBox="0 0 1024 1024"
              className="campaign-performance-component-icon2"
            >
              <path d="M598 214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>
            </svg>
          )}
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="campaign-performance-component-icon4"
        >
          <path d="M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"></path>
        </svg>
      </div>
    </div>
  )
}

CampaignPerformanceComponent.defaultProps = {
  Opportunities: '0',
  name: 'Campaign 1',
  opened_count: '1.867',
  reploed_count: '1.867',
  opened_percent: '55.7%',
  contacted: '3.360',
  replied_percent: '55.7%',
  clicked: '0',
}

CampaignPerformanceComponent.propTypes = {
  Opportunities: PropTypes.string,
  name: PropTypes.string,
  opened_count: PropTypes.string,
  reploed_count: PropTypes.string,
  opened_percent: PropTypes.string,
  contacted: PropTypes.string,
  replied_percent: PropTypes.string,
  clicked: PropTypes.string,
}

export default CampaignPerformanceComponent
