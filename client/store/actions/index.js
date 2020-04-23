// SIGN IN/UP 
export const TOGGLE_SIGN_UP_PAGE = 'TOGGLE_SIGN_UP_PAGE'
export const TOGGLE_SIGN_IN_PAGE = 'TOGGLE_SIGN_IN_PAGE'
export const SIGN_IN_USER = 'SIGN_IN_USER'
export const REGISTER_USER = 'REGISTER_USER'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const DELETE_PROFILE = 'DELETE_PROFILE'
// MED LOG ACTIONS
export const GET_MED_LOGS = 'GET_MED_LOGS'
export const GET_MED_LOG = 'GET_MED_LOG'
export const UPDATE_MED_LOGS = 'UPDATE_MED_LOGS'
export const UPDATE_MED_LOG = 'UPDATE_MED_LOG'

// REGISTER ACTIONS
export const registerUser = (user) => {
    return {
        type: REGISTER_USER,
        user
    }

}

// PROFILE ACTIONS
export const updateProfile = (details) => {
    return {
        type: UPDATE_PROFILE,
        details
    }
}
export const deleteProfile = (userId) => {
    return {
        type: DELETE_PROFILE,
        userId
    }
}


// SIGN IN ACTIONS
export const signUpPageToggle = () => {

    return {
        type: TOGGLE_SIGN_UP_PAGE
    }

}

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

export const updateSignUp = (details) => {
    return {
        type: UPDATE_SIGN_UP
    }
}




// MEDITATION ACTIONS
export const getMeditationLogs = (userId) => {
    return {
        type: GET_MED_LOGS,
        userId
    }
}

export const getMeditationLog = (userId, sessionId) => {
    return {
        type: GET_MED_LOG,
        userId, sessionId
    }
}

export const updateMeditationLogs = (userId) => {
    return {
        type: UPDATE_MED_LOGS,
        userId
    }
}

export const updateMeditationLog = (userId, sessionId) => {
    return {
        type: UPDATE_MED_LOG,
        userId, sessionId
    }
}


