import { combineReducers } from 'redux'
import auth from './auth'
import toggleForm from './toggleForm'
import profiles from './profiles'

export default combineReducers ({
    auth,
    toggleForm
})
