import { ADD_TODO, DELETE_TODO } from '../constant';

export const newTodo = (todo) => ({
      type: ADD_TODO,
      payload: {
            key: Math.random().toString(),
            todo,
      }
})
export const deleteTodo = (key) => {
      return {
            type: DELETE_TODO,
            payload: key
      }
}