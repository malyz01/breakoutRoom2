// PROFILE ACTIONS
import api from '../../api'
import { DELETE_PROFILE, FETCH_PROFILE } from '../types'

export const fetchProfile = (userId) => (dispatch) => {
  api
    .get(`/api/v1/profiles/${userId}`)
    .then((profile) => {
      dispatch({
        type: FETCH_PROFILE,
        payload: profile.data
      })
    })
    .catch((err) => console.log(err))
}

export const deleteProfile = (userId) => (dispatch) => {
  api
    .delete(`/api/v1/profiles/delete/${userId}`)
    .then(() => {
      dispatch({
        type: DELETE_PROFILE,
        userId
      }).catch((err) =>
        console.log('something went wrong when deleting your profile')
      )
    })
    .catch((err) => console.log(err))
}

// PUT /api/v1/profile/update/:id
export const updateProfile = (userId, updatedData) => (dispatch) => {
  api
    .put(`/api/v1/profiles/update/${user}`)
    .then((response) => {
      dispatch({
        type: UPDATE_PROFILE,
        userData: response.data
      })
    })
    .catch((err) => console.log(err))
}
