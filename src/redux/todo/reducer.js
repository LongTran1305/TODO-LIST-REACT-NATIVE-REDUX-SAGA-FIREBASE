import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../../constant/actionTypes";

const INITIAL_STATE ={
      todoList: []
};

export default (state = INITIAL_STATE, action) => {
      switch (action.type) {
            case ADD_TODO: {
                  return {
                        ...state,
                        todoList: [
                              ...state.todoList,
                              action.payload
                        ],
                  }
            };
            case EDIT_TODO:
                  let index = action.payload.id;
                  let value =  action.payload.todo;
                  return {
                        ...state,
                        todoList: state.todoList.map(Item =>
                            Item.key === index ? { ...Item, todo: value, } : Item
                        )

                  };
            case DELETE_TODO: {
                  const { itemKey } = action.payload;
                  return {
                        ...state,
                        todoList: state.todoList.filter((todoList) => todoList.key !== itemKey)
                  };
            }
            default:
                  return state;
      }
};

