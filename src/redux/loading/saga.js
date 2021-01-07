import {all, fork, put, takeLatest} from 'redux-saga/effects';
import {PUSH_LOADING, PUSH_LOADING_POPUP, SET_LOADING, SET_LOADING_POPUP} from "../../constant/actionTypes";

function* watchSetLoading() {
    yield takeLatest(PUSH_LOADING, function* (action) {
        yield put({
            type: SET_LOADING,
            payload: {
                isLoading: action.payload.isLoading
            }
        })
    })
}

function* watchSetLoadingPopup() {
    yield takeLatest(PUSH_LOADING_POPUP, function* (action) {
        yield put({
            type: SET_LOADING_POPUP,
            payload: {
                isLoadingPopup: action.payload.isLoadingPopup,
            }
        })
    })
}

export default function* rootSaga() {
    yield all([fork(watchSetLoading), fork(watchSetLoadingPopup)])
}