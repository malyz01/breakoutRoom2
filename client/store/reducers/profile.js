import { DELETE_PROFILE, UPDATE_PROFILE, FETCH_PROFILES } from '../types'

const initialState = {
  profiles: null, //array of objects
  userProfile: null //object
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      return { ...state }
    case UPDATE_PROFILE:
      return { ...state, userProfile: { ...action.data } }
    case DELETE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter((p) => p.id === action.userId)
      }
    default:
      return state
  }
}

export default profile
