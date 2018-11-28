import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

// injectGlobal
import './injectGlobal'

// pages
import Top from './pages/Top'
import About from './pages/About'
import NoMatch from './pages/NoMatch'
import Product from './pages/Product'
import Collaborator from './pages/Collaborator'


ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Top} />
        <Route path='/about' component={About} />
        <Route path='/product' component={Product} />
        <Route path='/collaborator' component={Collaborator} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('root')
)

registerServiceWorker()
