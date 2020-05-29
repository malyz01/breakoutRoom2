import { TOGGLE_SIGN_PAGE } from '../types'

const inititalState = {
  open: false,
  form: ''
}

export default (state = inititalState, action) => {
  switch (action.type) {
    case TOGGLE_SIGN_PAGE:
      return { form: action.form, open: action.open }
    default:
      return state
  }
}
