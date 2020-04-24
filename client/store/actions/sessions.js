// SESSIONS ACTIONS
import api from '../../api'
import { FETCH_SESSIONS, FETCH_USER_SESSIONS } from '../types'

export const fetchUserSessions = (userId) => (dispatch) => {
  console.log('inside the fetchUserSessions')
  api
    .get(`/v1/sessions/${userId}`)
    .then((session) => {
      dispatch({
        type: FETCH_USER_SESSIONS,
        payload: session.data
      })
    })
    .catch((err) => console.log(err.message))
}

export const fetchSessions = () => (dispatch) => {
  api.get(`/v1/sessions/`).then((sessions) => {
    dispatch({
      type: FETCH_SESSIONS,
      payload: sessions
    })
  })
}
