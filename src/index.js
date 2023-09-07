import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import MailCloud from './views/mail-cloud'
import Login from './views/login'
import ContactUs from './views/contact-us'
import Dashboard from './views/dashboard'
import Imprint from './views/imprint'
import Home from './views/home'
import NearCloud from './views/near-cloud'
import AboutUs from './views/about-us'
import ComponentsSandbox from './views/components-sandbox'
import PrivacyPolicy from './views/privacy-policy'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={MailCloud} exact path="/mail-cloud" />
        <Route component={Login} exact path="/login" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={Imprint} exact path="/imprint" />
        <Route component={Home} exact path="/" />
        <Route component={NearCloud} exact path="/near-cloud" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={ComponentsSandbox} exact path="/components-sandbox" />
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
