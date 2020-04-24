import React from 'react'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    emailAddress: '',
    password: ''
  }

  updateFirstName = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  updateLastName = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  updateUsername = event => {
    this.setState({
      username: event.target.value
    })
  }

  updateEmailAddress = event => {
    this.setState({
      emailAddress: event.target.value
    })
  }

  updatePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  // updateAll = () => {
  //   this.updateFirstName()
  //   this.updateLastName()
  //   this.updateUsername()
  //   this.updateEmailAddress()
  //   this.updatePassword()
  //   console.log(this.state)
  // }

  // handleChange = evt => {
  //   this.setState({
  //     [event.target.name]: evt.target.value
  //   })
  //   console.log(this.state)
  // }

  render () {
    return (
      <div className='sign-up-container'>
        <div className='sign-up-text'>
          <h1>Sign up</h1>
          <hr/>
          <h2>We're happy you're joining us.</h2>
          <p>Please fill in the following details:</p>
        </div>
        <div className='sign-up-form'>
          <input onChange = {this.updateFirstName} name='firstName' placeholder='First name' /><br/>
          <input onChange={this.updateLastName} name='lastName' placeholder='Last name' /><br />
          <input onChange={this.updateUsername}name='username' placeholder='Username' /><br />
          <input onChange={this.updateEmailAddress}name='emailAddress' placeholder='Email address' /><br />
          <input onChange={this.updatePassword} name='password' placeholder='Password' /><br />
        </div>
        <div className='sign-up-buttons'>
          <Link to='/'>
            <button>
              Cancel
            </button>
          </Link>
          <button
            onClick={this.updateAll} // updates the database (adds info to database)
          >
          Sign up
          </button>
        </div>
      </div>
    )
  }
}

export default SignUp
