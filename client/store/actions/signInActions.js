export const signInPageToggle = () => {

    return {
        type: TOGGLE_SIGN_IN_PAGE
    }

}

export const signInUser = (user) => {
    return {
        type: SIGN_IN_USER,
        user
    }
}

export const signUpPageToggle = () => {

    return {
        type: TOGGLE_SIGN_UP_PAGE
    }

}

//export const updateSignUp = (details) => {
//   return {
//       type: UPDATE_SIGN_UP 
//    }
//}




