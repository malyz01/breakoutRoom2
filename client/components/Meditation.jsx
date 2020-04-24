import React from 'react'
// import UIfx from 'uifx'

// import wavFile from '../../audio/singingBowl.wav'
// const audio = new UIfx(wavFile)

class Meditation extends React.Component {
  state = {
    displayTimer: false,
    timerValue: 600000
  }
  startMeditation = () => {
    this.setState({displayTimer: true})
    let timer = setInterval(function () {
      // updates the timer display
      this.setState({timerValue: this.state.timerValue - 100})
      if(this.state.timerValue >= 0) {
        clearInterval(timer)
        this.setState({timerValue:600000})
      }
    }, 100)
  }
  render () {
    return (
      <div className='meditate-container'>
        {!this.state.displayTimer && <div className='meditate'>
          <h2>Take some deep breaths...</h2>
          <p>Whenever you're ready to begin, click start.</p>
          <button onClick = {this.startMeditation} >Start</button>
        </div>}
      </div>

    )
  }
}

export default Meditation
