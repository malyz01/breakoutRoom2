import { TOGGLE_SIGN_PAGE } from '../types'

export const toggleForm = (form, open) => {
  return {
    type: TOGGLE_SIGN_PAGE,
    form,
    open
  }
}
