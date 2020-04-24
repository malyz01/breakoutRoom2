import React from 'react'
// import UIfx from 'uifx'

// import wavFile from '../../audio/singingBowl.wav'
// const audio = new UIfx(wavFile)
class Meditation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      displayTimer: false,
      timerValue: 1000
    }
  }
  componentDidMount () {
    let start = document.getElementById('start')
    start.addEventListener('click', function () {
      playSound()
    })
  }

  playSound = () => {
    console.log('testing 1')
    let audio = new Audio()
    audio.src = '/audio/singingBowl.wav'
    audio.play()
  }

  startMeditation = () => {
    this.setState({ displayTimer: true })
    this.timer = setInterval(() => {
      // updates the timer display

      this.setState({ timerValue: this.state.timerValue - 100 }, () => {
        // console.log(this.state.timerValue)
      })

      if (this.state.timerValue <= 0) {
        clearInterval(this.timer)
        this.playSound()
        this.setState({ timerValue: 1000 })
      }
    }, 100)
  }
  convertToTimer = (milliseconds) => {
    // get all minutes
    let totalSeconds = milliseconds / 1000
    let minutes = Math.floor(totalSeconds / 60)
    // get remaining seconds
    let remainingSeconds = Math.floor(totalSeconds % 60)
    // get remaining milliseconds
    let remainingMs = milliseconds - minutes * 60 * 1000 - remainingSeconds * 1000

    if(remainingMs === 0){
      remainingMs = '00'
    }
    else{
      remainingMs = remainingMs/10
    }
    if(minutes < 10){
      minutes = `0${minutes}`
    }
    return `${minutes}:${remainingSeconds}:${remainingMs}`
  }
  render () {
    const { timerValue } = this.state
    return (
      <div className='meditate-container'>
        {!this.state.displayTimer && <div className='meditate'>
          <h2>Take some deep breaths...</h2>
          <p>Whenever you're ready to begin, click start.</p>
          <button id='start' onClick = {this.startMeditation} >Start</button>
        </div>}
        {this.state.displayTimer &&

          <div className='timer'>
            {this.convertToTimer(timerValue)}
          </div>
        }
      </div>

    )
  }
}

export default Meditation
