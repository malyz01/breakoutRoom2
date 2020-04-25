import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleForm } from '../store/actions/toggleForm'

class Navbar extends Component {
  handleLink = (path) => () => {
    this.props.history.push(path)
  }

  handleSign = (form) => () => {
    this.props.toggleForm(form, true)
  }

  render() {
    return (
      <div className="responsive-nav">
        <div onClick={this.handleLink('/')} className="navbar-brand pointer">
          BR2
        </div>
        <div className="navbar-left-menu pointer">
          <Link to="/">HOME</Link>
          <Link to="/session">PROFILE</Link>
        </div>
        <div className="navbar-right-menu pointer">
          <button
            onClick={this.handleSign('signin')}
            className="sign-in-button pointer"
          >
            SIGN IN
          </button>
          <button
            onClick={this.handleSign('signup')}
            className="sign-up-button pointer"
          >
            SIGN UP
          </button>
        </div>
      </div>
    )
  }
}

export default connect(null, { toggleForm })(Navbar)
