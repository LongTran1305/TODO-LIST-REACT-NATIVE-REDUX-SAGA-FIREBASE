import { combineReducers } from "redux";
import todo from './todo/reducer';

const reducers = combineReducers({
        todo,
});
export default reducers;
