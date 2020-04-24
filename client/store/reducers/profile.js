import { DELETE_PROFILE, UPDATE_PROFILE } from '../types'

const initialState = {
    user: ''
}

const profile = ( state=initialState, action ) => {
    switch(action.type) {
        case DELETE_PROFILE:
            return {
                user: state.user.filter((profile) => profile !== action.user)
            }
    }
}

export default profile