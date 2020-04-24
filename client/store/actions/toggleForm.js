import { TOGGLE_SIGN_PAGE } from '../types'

export const toggleForm = (form) => {
    return {
        type: TOGGLE_SIGN_PAGE,
        payload: form //form is 
    }
}