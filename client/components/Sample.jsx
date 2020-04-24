import React from 'react'
import {connect} from 'react-redux'
import {toggleForm} from '../store/actions/toggleForm'

class Sample extends React.Component {
    handleSignUp = () => {
        this.props.toggleForm('signup')
    }
    
    handleSignIn = () => {
        this.props.toggleForm('signin')
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleSignUp}>Toggle Signup</button>
                <button onClick={this.handleSignIn}>Toggle Signin</button>
                Some content here
                </div>
        )
    }
}

const mapStateToProps = state => ({
       signup: state.toggleForm.signup,
       signin: state.toggleForm.signin
})

const mDTP = {
    toggleForm 
}

export default connect()(Sample)