const initialState = {
    errors: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_ERROR":
            
            let errors = state.errors;

            if (!state.errors.includes(action.payload)) {
                errors.push(action.payload);
            }

            return { ...state, errors: errors };

        case "CLEAR_ERROR":
            const newErrors = state.errors.filter((item) => {
                return item !== action.payload;
            })
            return { ...state, errors: newErrors };

        case "CLEAR_ALL_ERRORS":
            return { ...state, errors: [] };
        default:
            return state;
    }
};