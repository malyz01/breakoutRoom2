import { TOGGLE_SIGN_PAGE } from '../types'

const inititalState = {
    signup: false,
    signin: false
}

export default (state=inititalState, action) => {
    switch (action.type) {
        case TOGGLE_SIGN_PAGE:
        return {...state, [action.payload]: !state[action.payload]}
        default:
            return state
    }
}