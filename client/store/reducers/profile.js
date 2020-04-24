import { DELETE_PROFILE, UPDATE_PROFILE } from '../types'

const initialState = {
    userId: ''
}

const profile = ( state=initialState, action ) => {
    switch(action.type) {
        case DELETE_PROFILE:
            return {
                userId: state.userId.filter((profile) => profile !== action.userId)
            }
    }
}

export default profile