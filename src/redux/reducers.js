import { combineReducers } from "redux";
import todo from './todo/reducer';
import { firebaseReducer } from 'react-redux-firebase'
const reducers = combineReducers({
        todo,
        firebase: firebaseReducer
});
export default reducers;
