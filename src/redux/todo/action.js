import {ADD_TODO, DELETE_TODO,EDIT_TODO} from '../../constant/actionTypes';

export const newTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            key: Math.random().toString(),
            todo,
        }
    }
}
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            itemKey: id
        }
    }
}

export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload:{
            itemKey: id,
        }
    }
}
