import {GET_ALL_TODO, PUSH_ADD_TODO, PUSH_DELETE_TODO, PUSH_EDIT_TODO,} from '../../constant/actionTypes';


export const getTodo = () => {
    return {
        type: GET_ALL_TODO,
    }
}

export const newTodo = (todo) => {
    return {
        type: PUSH_ADD_TODO,
        payload: {
            todo,
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: PUSH_DELETE_TODO,
        payload: {
            itemKey: id
        }
    }
}

export const editTodo = (newTodo, id) => {
    return {
        type: PUSH_EDIT_TODO,
        payload: {
            id,
            todo: newTodo,
        }
    }
}
