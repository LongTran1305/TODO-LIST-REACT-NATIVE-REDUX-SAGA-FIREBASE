import {SET_ALL_TODO,} from "../../constant/actionTypes";

const INITIAL_STATE = {
      todoList: []
};

export default (state = INITIAL_STATE, action) => {
      switch (action.type) {
            case SET_ALL_TODO:
                  return {
                        ...state,
                        todoList: action.payload.todos,
                  }
            default:
                  return state;
      }
};

