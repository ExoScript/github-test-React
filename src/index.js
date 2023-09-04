import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import NotFound from './views/not-found'
import Product1 from './views/product-1'
import Login from './views/login'
import ContactUs from './views/contact-us'
import Product2 from './views/product-2'
import Dashboard from './views/dashboard'
import Imprint from './views/imprint'
import Home from './views/home'
import AboutUs from './views/about-us'
import ComponentsSandbox from './views/components-sandbox'
import PrivacyPolicy from './views/privacy-policy'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={NotFound} path="**" />
        <Route component={Product1} exact path="/product-1" />
        <Route component={Login} exact path="/login" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={Product2} exact path="/product-2" />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={Imprint} exact path="/imprint" />
        <Route component={Home} exact path="/" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={ComponentsSandbox} exact path="/components-sandbox" />
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
