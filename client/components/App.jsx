import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Meditation from './Meditation'
import MeditationHome from './MeditationHome'

const App = () => {
  return (
    <>
      <Route exact path ='/' component={Home} />
      <Route exact path='/home' component={MeditationHome} />
      <Route exact path='/meditate' component={Meditation} />
    </>
  )
}

export default App
