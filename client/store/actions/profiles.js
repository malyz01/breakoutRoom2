// PROFILE ACTIONS

export const deleteProfile = (userId) => {
    return {
        type: DELETE_PROFILE,
        userId
    }
}


// UPDATE PROFILE ACTION
export const updateProfile = (details) => {
    return {
        type: UPDATE_PROFILE,
        details
    }
}