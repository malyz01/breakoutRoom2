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

// GET - /api/v1/profiles/:userId
export const fetchUserProfile = (userId) => (dispatch) => {
  api
    .get(`/api/v1/profiles/${userId}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_USER_PROFILE,
        payload: data
      })
    })
    .catch((err) => console.log(err.message))
}

// PUT - /api/v1/profiles/update/:userId
export const updateProfile = (userId, updatedData) => (dispatch) => {
  api
    .put(`/api/v1/profiles/update/${userId}`, updatedData)
    .then(({ data }) => {
      dispatch({
        type: UPDATE_PROFILE,
        payload: data
      })
    })
    .catch((err) => console.log(err.message))
}

export const deleteProfile = (userId) => (dispatch) => {
  api
    .delete(`/api/v1/profiles/delete/${userId}`)
    .then(() => {
      dispatch({
        type: DELETE_PROFILE,
        payload: userId
      }).catch((err) =>
        console.log('something went wrong when deleting your profile')
      )
    })
    .catch((err) => console.log(err))
}
