import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpPageToggle, signInPageToggle } from '../store/actions/index'
import { Link } from 'react-router-dom'
class Navbar extends Component {
  render () {
    return (<div className="responsive-nav">
      <div className="navbar-brand">
            BR2
      </div>
      <div className="navbar-left-menu">
        <Link to='/'>
                HOME
        </Link>
        <Link to='/home'>
                PROFILE
        </Link>
      </div>
      <div className="navbar-right-menu">
        <Link to='/sign-in'>
          <button className="sign-in-button">
                SIGN IN
          </button>
        </Link>
        <Link to='/sign-up'>
          <button className="sign-up-button">
                SIGN UP
          </button>
        </Link>
      </div>
    </div>)
  }
}

// function mapStateToProps (state) {
//     return {
//         username: state.user.username
//     }
// }
// const mapDispatchToProps = {
//     signUpPageToggle,
//     signInPageToggle
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
export default Navbar
