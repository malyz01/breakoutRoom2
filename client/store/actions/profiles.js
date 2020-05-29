// PROFILE ACTIONS
import api from '../../api'
import {
  FETCH_PROFILES,
  FETCH_USER_PROFILE,
  UPDATE_PROFILE,
  DELETE_PROFILE
} from '../types'

// GET - /api/v1/profiles
export const fetchProfiles = () => (dipatch) => {
  api
    .get('/profiles')
    .then(({ data }) => {
      dispatch({
        type: FETCH_PROFILES,
        payload: data
      })
    })
    .catch((err) => console.log(err.message))
}

// GET - /api/v1/profiles/user/:userId
export const fetchUserProfile = (userId) => (dispatch) => {
  api
    .get(`/profiles/user/${userId}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_USER_PROFILE,
        payload: data
      })
    })
    .catch((err) => console.log(err.message))
}

// PUT - /api/v1/profiles/update/:userId
export const updateUserProfile = (userId, updatedData) => (dispatch) => {
  api
    .put(`/profiles/update/${userId}`, updatedData)
    .then(({ data }) => {
      dispatch({
        type: UPDATE_PROFILE,
        payload: data
      })
    })
    .catch((err) => console.log(err.message))
}

// DELETE - /api/v1/profiles/delete/:userId
export const deleteUserProfile = (userId) => (dispatch) => {
  api
    .delete(`/profiles/delete/${userId}`)
    .then(() => {
      dispatch({
        type: DELETE_PROFILE,
        payload: userId
      })
    })
    .catch((err) => console.log(err.message))
}
