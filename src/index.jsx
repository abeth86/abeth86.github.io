import React from 'react'
import ReactDOM from 'react-dom'
import Router, {Route} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {setState} from './action_creators'
import reducer from './reducer'
import App from 'components/App'
import {HomeContainer} from 'components/Home'

let store = createStore(reducer)
setState()

const routes = <Route component={App}>
  <Route path="/" component={HomeContainer} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
