import {all, call, fork, put, takeLatest} from 'redux-saga/effects';

import {
    GET_ALL_TODO,
    PUSH_ADD_TODO,
    PUSH_DELETE_TODO,
    PUSH_EDIT_TODO,
    SET_ALL_TODO,
    SET_LOADING_POPUP,
} from '../../constant/actionTypes';

import todoRef from "../../firebase";

function* watchAddTodo() {
    yield takeLatest(PUSH_ADD_TODO, function* (action) {
        try {
            yield put({
                type: SET_LOADING_POPUP,
                payload: {
                    isLoadingPopup: true,
                }
            });
            yield call(
                todoRef.firestore.addDocument,
                'Todo',
                action.payload,
            );
            yield put({
                type: GET_ALL_TODO
            })
        } catch (e) {
            // console.log(e);
        }
    });
}

function* watchGetAllTodo() {
    yield takeLatest(GET_ALL_TODO, function* (action) {
        const snapshot = yield call(todoRef.firestore.getCollection, 'Todo');
        const todos = [];
        snapshot.forEach(doc => {
                const entity = doc.data()
                entity.id = doc.id
                todos.push(entity);
            },
            error => {
                console.log(error)
            }
        )
        yield put({
            type: SET_LOADING_POPUP,
            payload: {
                isLoadingPopup: true,
            }
        });
        yield put({
            type: SET_ALL_TODO,
            payload: {
                todos
            },
        });
        yield put({
            type: SET_LOADING_POPUP,
            payload: {
                isLoadingPopup: false,
            }
        });
    });
}

function* watchUpdateTodo() {
    yield takeLatest(PUSH_EDIT_TODO, function* (action) {
        const index = action.payload.id;
        const value = action.payload.todo;
        yield put({
            type: SET_LOADING_POPUP,
            payload: {
                isLoadingPopup: true,
            }
        });

        yield call(todoRef.firestore.updateDocument, `Todo/${index}`, 'todo', `${value}`);
        yield put({
            type: GET_ALL_TODO
        })
    })
}

function* watchDeleteTodo() {
    yield takeLatest(PUSH_DELETE_TODO, function* (action) {
        const {itemKey} = action.payload;
        yield put({
            type: SET_LOADING_POPUP,
            payload: {
                isLoadingPopup: true,
            }
        });

        yield call(todoRef.firestore.deleteDocument, `Todo/${itemKey}`);
        yield put({
            type: GET_ALL_TODO
        })
    })
}

export default function* rootSaga() {
    yield all([fork(watchAddTodo), fork(watchUpdateTodo), fork(watchDeleteTodo), fork(watchGetAllTodo)]);
}
