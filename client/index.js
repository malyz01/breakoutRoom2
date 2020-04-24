import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import reducers from './store/reducers/index'
import { createStore } from 'redux'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
