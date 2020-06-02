import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {authUser} from '../../store/actions/auth'

class SignIn extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.authUser(this.state)
  }

  render() {
    return (
      <div className="sign-in-container">
        <div className="sign-in-text">
          <h1>Sign in</h1>
          <hr />
        </div>
        <div className="sign-in-form">
          <input
            onChange={this.handleOnChange}
            name="username"
            type="text"
            placeholder="Username"
          />
          <br />
          <input
            onChange={this.handleOnChange}
            name="password"
            type="password"
            placeholder="Password"
          />
          <br />
        </div>
        <div className="sign-in-buttons">
          <Link to="/">
            <button>Cancel</button>
          </Link>
          <button
            onClick={this.handleSubmit}
          >
            Sign In
          </button>
        </div>
      </div>
    )
  }
}

export default connect(null, {authUser})(SignIn)
