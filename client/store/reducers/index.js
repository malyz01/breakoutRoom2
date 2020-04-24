import { combineReducers } from 'redux'
import auth from './auth'
import toggleForm from './toggleForm'
import profile from './profile'

export default combineReducers({
    auth,
    profile,
    toggleForm
})
