import { combineReducers } from 'redux'
import auth from './auth'
import toggleForm from './toggleForm'
import profile from './profile'
import session from './session'

export default combineReducers({
    auth,
    session,
    profile,
    toggleForm,
})
