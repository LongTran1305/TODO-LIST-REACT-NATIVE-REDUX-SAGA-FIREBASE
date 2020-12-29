import {
      SET_ADD_TODO,
      SET_DELETE_TODO,
      SET_EDIT_TODO
} from "../../constant/actionTypes";

const INITIAL_STATE = {
      todoList: []
};

export default (state = INITIAL_STATE, action) => {
      switch (action.type) {
            case SET_ADD_TODO: {
                  return {
                        ...state,
                        todoList: action.payload.todoList,
                  }
            };
            case SET_EDIT_TODO:
                  return {
                        ...state,
                        todoList: action.payload.todoList,
                  };
            case SET_DELETE_TODO: {

                  return {
                        ...state,
                        todoList: action.payload.todoList,
                  };
            }
            default:
                  return state;
      }
};

