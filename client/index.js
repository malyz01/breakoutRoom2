import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { HashRouter as Router } from 'react-router-dom'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'

import App from './components/App'
import reducers from './store/reducers/index'
import { setAuth, setAuthorizationToken } from './store/actions/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken) //token used to validate user through header request
  try {
    store.dispatch(setAuth(jwtDecode(localStorage.jwtToken)))
  } catch (err) {
    store.dispatch(setAuth({}))
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
