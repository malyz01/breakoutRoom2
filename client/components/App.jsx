import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Meditation from './Meditation'
import MeditationHome from './MeditationHome'
import Navbar from './Navbar'
import SignUp from './SignUp'
import SignIn from './SignIn'
const App = () => {
  return (
    <>
      <div className ='body-overlay'></div>
      <Route path = '/' component= {Navbar} />
      <Route exact path ='/' component={Home} />
      <Route exact path='/home' component={MeditationHome} />
      <Route exact path='/meditate' component={Meditation} />
      <Route exact path='/sign-up' component={SignUp} />
      <Route exact path='/sign-in' component={SignIn} />
    </>
  )
}

export default App
