import { FETCH_USER_SESSIONS, FETCH_SESSIONS } from '../types'

const initialState = {
  user: null,
  sessions: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SESSIONS:
      return { ...state, user: action.payload }
    case FETCH_SESSIONS:
      return { ...state, sessions: action.payload }
    default:
      return state
  }
}
