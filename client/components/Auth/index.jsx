import React from 'react'
import { connect } from 'react-redux'
import { toggleForm } from '../../store/actions/toggleForm'
import { Sidebar } from 'semantic-ui-react'
import Signin from './SignIn'
import Signup from './Signup'

const Authform = (props) => {
  return (
    <Sidebar.Pushable>
      <Sidebar
        animation="overlay"
        direction="right"
        onHide={() => props.toggleForm(null, false)}
        vertical="true"
        visible={props.open}
        width="very wide"
      >
        {props.form === 'signin' && <Signin />}
        {props.form === 'signup' && <Signup />}
      </Sidebar>
      <Sidebar.Pusher>{props.children}</Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

const mapStateToProps = (state) => ({
  form: state.toggleForm.form,
  open: state.toggleForm.open
})

export default connect(mapStateToProps, { toggleForm })(Authform)
