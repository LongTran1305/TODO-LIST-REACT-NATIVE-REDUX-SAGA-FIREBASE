import { all, put, fork } from 'redux-saga/effects'
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../../constant/actionTypes';

function* watchAddTodo(todo) {
    yield put({
        type: ADD_TODO,
        payload: {
            key: Math.random().toString(),
            todo,
        }
    })
}

function* watchUpdateTodo(newTodo, id) {
    yield put({
        type: EDIT_TODO,
        payload: {
            id,
            todo: newTodo,
        }
    })
}

function* watchDeleteTodo(id) {
    yield put({
        type: DELETE_TODO,
        payload: {
            id
        }
    })
}

export default function* rootSaga() {
    yield all([fork(watchAddTodo), fork(watchUpdateTodo), fork(watchDeleteTodo)]);
}
