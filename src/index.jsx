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
import {AboutContainer} from 'components/About'
import doge from 'dogefy'

console.log("%cA doge, just for you!", "color: blue; font-style: italic")
console.log(doge("super awesome portfolio"))

let store = createStore(reducer)
setState()

const history = createHistory({
  queryKey: false
})

const routes = <Route component={App}>
  <Route path="/" component={HomeContainer} />
  <Route path="/about" component={AboutContainer} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
