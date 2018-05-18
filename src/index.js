import React from 'react'
import ReactDOM from 'react-dom'
// import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// injectGlobal
import './injectGlobal'

// pages
import Top from './pages/Top'
import About from './pages/About'
import Product from './pages/Product'
import NoMatch from './pages/NoMatch'


ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Top} />
        <Route path='/about' component={About} />
        <Route path='/product' component={Product} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('root')
)
// registerServiceWorker()
