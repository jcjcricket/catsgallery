import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import ItemCard from './ItemCard';
import { reducer } from './reducers';
import { sagaWatcher } from './sagas';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(sagaWatcher);

const App = () => {
  return (
    <Provider store={store}>
      <ItemCard />
    </Provider>
  );
};

export default App;
