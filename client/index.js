import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import { createStore } from 'redux'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store} >
    <Router>
      <App />
    </Router>
    </Provider>

    ,
    document.getElementById('app')
  )
})
