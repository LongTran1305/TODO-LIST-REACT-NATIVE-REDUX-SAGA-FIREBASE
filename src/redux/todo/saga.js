import {all, fork, put, select, takeLatest} from 'redux-saga/effects';

import {
    GET_ALL_TODO,
    PUSH_ADD_TODO,
    PUSH_DELETE_TODO,
    PUSH_EDIT_TODO,
    SET_DELETE_TODO,
    SET_EDIT_TODO,
} from '../../constant/actionTypes';

import firebaseCore from '../../firebase';

function* watchAddTodo() {
    yield takeLatest(PUSH_ADD_TODO, function* (action) {

        const res = yield firebaseCore.todoRef().add({
            todo: action.payload.todo,
        });

        if (res) {
            yield put({
                type: GET_ALL_TODO,
            });
        }
    });
}


function* watchGetAllTodo() {
    yield takeLatest(GET_ALL_TODO, function* (action) {
        const todoList = [];


        // yield put({
        //     type: SET_ALL_TODO,
        //     payload: {
        //         todoList
        //     },
        // });

    });
}


function* watchUpdateTodo() {
    yield takeLatest(PUSH_EDIT_TODO, function* (action) {
        const state = yield select((state) => state.todo);

        const index = action.payload.id;
        const value = action.payload.todo;

        yield put({
            type: SET_EDIT_TODO,
            payload: {
                ...state,
                todoList: state.todoList.map(Item =>
                    Item.key === index ? { ...Item, todo: value, } : Item
                ),
            },
        });
    })
}

function* watchDeleteTodo() {
    yield takeLatest(PUSH_DELETE_TODO, function* (action) {
        const state = yield select((state) => state.todo);

        const { itemKey } = action.payload;

        yield put({
            type: SET_DELETE_TODO,
            payload: {
                ...state,
                todoList: state.todoList.filter((todoList) => todoList.key !== itemKey),
            },
        });
    })
}

export default function* rootSaga() {
    yield all([fork(watchAddTodo), fork(watchUpdateTodo), fork(watchDeleteTodo), fork(watchGetAllTodo)]);
}
