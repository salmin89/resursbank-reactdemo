export function setError(error) {
    return (dispatch) => {
        dispatch({
            type: 'SET_ERROR',
            payload: error
        })
    }
}

export function clearError(error) {
    return (dispatch) => {
        dispatch({
            type: 'CLEAR_ERROR',
            payload: error
        })
    }
}

export function clearAllErrors() {
    return (dispatch) => {
        dispatch({
            type: 'CLEAR_ALL_ERRORS',
            payload: null
        })
    }
}