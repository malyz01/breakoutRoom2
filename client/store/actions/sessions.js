// SESSIONS ACTIONS
import api from '../../api'
import { FETCH_SESSIONS, FETCH_USER_SESSIONS } from '../types'

// GET - /api/v1/sessions
export const fetchSessions = () => (dispatch) => {
  api.get(`/sessions/`).then((sessions) => {
    dispatch({
      type: FETCH_SESSIONS,
      payload: sessions
    })
  })
}

// GET - /api/v1/sessions/user/:userId
export const fetchUserSessions = (userId) => (dispatch) => {
  api
    .get(`/sessions/user/${userId}`)
    .then((session) => {
      dispatch({
        type: FETCH_USER_SESSIONS,
        payload: session.data
      })
    })
    .catch((err) => console.log(err.message))
}
