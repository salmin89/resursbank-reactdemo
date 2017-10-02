import personData from './personData.reducer.js'; // My own reducer
import error from './error.reducer.js'; // My own reducer

import {combineReducers} from 'redux'; // Lib

const rootReducer = combineReducers({
    personStore: personData,
    errorStore: error
});

export default rootReducer;