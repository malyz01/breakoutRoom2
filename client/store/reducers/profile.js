import {
  FETCH_PROFILES,
  FETCH_USER_PROFILE,
  UPDATE_PROFILE,
  DELETE_PROFILE
} from '../types'

const initialState = {
  profiles: null, //array of objects
  userProfile: null //object
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      return { ...state, profiles: action.payload }
    case FETCH_USER_PROFILE:
    case UPDATE_PROFILE:
      return { ...state, userProfile: action.payload }
    case DELETE_PROFILE:
      return {
        profiles: state.profiles.filter((p) => p.id === action.payload),
        userProfile:
          state.userProfile.id === action.payload ? null : state.userProfile
      }
    default:
      return state
  }
}

export default profile
