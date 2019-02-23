import React from 'react';
import ReactDOM from 'react-dom';
import App from './';

import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import quizApp from '../../reducers';
import dataSaga from '../../actions/saga.js';

const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const store = createStore(quizApp, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(dataSaga);
  return store;
};

let store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
