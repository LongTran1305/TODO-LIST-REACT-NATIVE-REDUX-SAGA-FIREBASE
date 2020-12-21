import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../../constant";

const INITIAL_STATE = {
      todoList: [],
}


const reducer = (state = INITIAL_STATE, action) => {
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
            // case EDIT_NOTE:
            //       console.log('edit todo')
            //       return update(state, {
            //             [payload.todo.id]: {
            //                   todo: { $set: payload.todo.todo }
            //             }
            //       });
            case DELETE_TODO: {
                  const { itemKey } = action.payload?.itemKey;
                  return {
                        ...state,
                        todoList: state.todoList.filter((todoList) => todoList.key !== itemKey)
                  };
            }
            default:
                  return state;

      }
};
export default reducer;
