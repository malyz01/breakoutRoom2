import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
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
            placeholder="Username"
          />
          <br />
          <input
            onChange={this.handleOnChange}
            name="password"
            placeholder="Password"
          />
          <br />
        </div>
        <div className="sign-in-buttons">
          <Link to="/">
            <button>Cancel</button>
          </Link>
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

export default connect()(SignIn)
