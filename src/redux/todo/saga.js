import { all, put, fork, select, takeLatest } from 'redux-saga/effects';

import {
    PUSH_ADD_TODO,
    SET_ADD_TODO,
    PUSH_DELETE_TODO,
    SET_DELETE_TODO,
    PUSH_EDIT_TODO,
    SET_EDIT_TODO
} from '../../constant/actionTypes';

import todoRef from '../../firebase/firebase';
import {firebase} from '../../firebase/firebase';

function* watchAddTodo() {
    yield takeLatest(PUSH_ADD_TODO, function* (action) {
        const state = yield select((state) => state.todo);
        // todoRef.add({
        //     todo: action.todo,
        // });

        // yield call(todoRef.add({
        //     todo: action.todo,
        // }))

        // yield put({
        //     type: SET_ADD_TODO,
        //     payload: {
        //         ...state,
        //         todoList: [
        //             ...state.todoList,
        //             action.payload
        //         ],
        //     },
        // });
    })
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
    yield all([fork(watchAddTodo), fork(watchUpdateTodo), fork(watchDeleteTodo)]);
}
