import {all} from 'redux-saga/effects';
import todoSaga from './todo/saga';
import loadingSaga from './loading/saga';

export default function* rootSaga() {
      yield all([todoSaga(), loadingSaga()]);
}
