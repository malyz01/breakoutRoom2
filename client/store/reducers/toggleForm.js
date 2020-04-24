import { TOGGLE_SIGN_PAGE } from '../types'
//import { switch } from 'react-router-dom'

const inititalState = {
    signup: false,
    signin: false
}

const toggleForm = (state=inititalState, action) => {
    switch (action.type) {
        case TOGGLE_SIGN_PAGE:
        return {...state, [action.payload]: !state[action.payload]}
    }
}