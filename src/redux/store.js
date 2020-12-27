import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';

import reducers from './reducers';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];

export function configureStore() {
      const store = createStore(reducers, applyMiddleware(sagaMiddleware));
      sagaMiddleware.run(saga);
      return store;
}






