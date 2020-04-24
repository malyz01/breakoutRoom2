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