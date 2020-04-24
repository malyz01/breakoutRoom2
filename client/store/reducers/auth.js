import {TOGGLE_SIGN_PAGE} from '../types'

const initialState = {
    open: false
}

const authentication = (state=initialState, actions) => {
    switch(actions.type) {
        case TOGGLE_SIGN_PAGE:
            return {...state, open: !state.sign }
            
        default :
            return state
    }
}



export default authentication


// {
//     open: state.auth.open
// }

// connect(mSTP, mDTP)()