import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Meditation from './Meditation'
import Session from './Session'
import Navbar from './Navbar'
import Auth from './Auth'

const App = () => {
  return (
    <>
      <div className="body-overlay"></div>
      <Route path="/" component={Navbar} />
      <Auth>
        <Route exact path="/" component={Home} />
        <Route exact path="/session" component={Session} />
        <Route exact path="/meditate" component={Meditation} />
      </Auth>
    </>
  )
}

export default App
