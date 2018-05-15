import React from 'react'
import ReactDOM from 'react-dom'
// import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'

// containers
import App from './containers/App'

const store = createStore(reducer)


ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
)
// registerServiceWorker()
