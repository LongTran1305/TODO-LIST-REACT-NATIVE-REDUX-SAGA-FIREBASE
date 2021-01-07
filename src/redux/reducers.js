import {combineReducers} from "redux";
import todo from './todo/reducer';
import loading from './loading/reducer';
import {firebaseReducer} from 'react-redux-firebase'

const reducers = combineReducers({
        todo,
        loading,
        firebase: firebaseReducer
});
export default reducers;
