import { combineReducers } from 'redux';
import userReducer from './userReducer';


// Import your reducers here
// import yourReducer from './yourReducer';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;