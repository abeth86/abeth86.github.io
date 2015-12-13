import React from 'react'
import ReactDOM from 'react-dom'
import Router, {Route} from 'react-router'
import createHistory from 'history/lib/createHashHistory'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {setState} from './action_creators'
import reducer from './reducer'
import App from 'components/App'
import {HomeContainer} from 'components/Home'

let store = createStore(reducer)
setState()

const history = createHistory({
  queryKey: false
})

const routes = <Route component={App}>
  <Route path="/" component={HomeContainer} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
