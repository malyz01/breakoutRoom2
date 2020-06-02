import api, { setTokenHeader } from '../../api'
import { SET_AUTH } from '../types'

export const setAuth = (user) => ({
  type: SET_AUTH,
  payload: user
})

export const setAuthorizationToken = (token) => {
  setTokenHeader(token)
}

export const authUser = (user) => (dispatch) => {
  api
    .post(`/auth/login`, user)
    .then((response) => {
      const { token, ...userData } = response.data
      localStorage.setItem('jwtToken', token)
      setAuthorizationToken(token)
      dispatch(setAuth(userData))
    })
    .catch((err) => console.log(err))
}

export const newUser = (data) => (dispatch) => {
  api
    .post(`/auth/register`, data)
    .then((response) => {
      const { token, ...userData } = response.data
      localStorage.setItem('jwtToken', token)
      setAuthorizationToken(token)
      dispatch(setAuth(userData))
    })
    .catch((err) => console.log(err))
}

export const logout = () => (dispatch) => {
  localStorage.clear()
  setAuthorizationToken(false)
  dispatch(setAuth({}))
}

export default {
  setAuth,
  setAuthorizationToken,
  authUser,
  logout
}
