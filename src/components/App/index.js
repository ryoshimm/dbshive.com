import React from 'react'
import { Route, Switch } from 'react-router-dom'

// containers
import Top from '../Top'
import Product from '../Product'
import NoMatch from '../NoMatch'


const App = () => {
  return (
    <div className="App">
      <h1>dbshive.com</h1>

      <hr />

      <Switch>
        <Route exact path='/' component={Top} />
        <Route path='/product' component={Product} />

        <Route component={NoMatch} />
      </Switch>
    </div>
  )
}

export default App
