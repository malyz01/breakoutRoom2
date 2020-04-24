import React from 'react'

class SignIn extends React.Component {
  state = {
    username: '',
    password: ''
  }

  updateUsername = event => {
    this.setState({
      username: event.target.value
    })
  }

  updatePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  render () {
    return (
      <div className='sign-in-container'>
        <div className='sign-in-text'>
          <h1>Sign in</h1>
          <hr />
        </div>
        <div className='sign-in-form'>
          <input onChange={this.updateUsername} name='username' placeholder='Username' /><br />
          <input onChange={this.updatePassword} name='password' placeholder='Password' /><br />
        </div>
        <div className='sign-in-buttons'>
          <button>
            Cancel
          </button>
          <button
            onClick={this.updateAll} // updates the database (adds info to database)
          >
            Sign In
          </button>
        </div>
      </div>
    )
  }
}

export default SignIn
