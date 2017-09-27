import personData from './personData.reducer.js'; // My own reducer

import {combineReducers} from 'redux'; // Lib

const rootReducer = combineReducers({
    personStore: personData
});

export default rootReducer;