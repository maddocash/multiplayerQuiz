import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import openSocket from 'socket.io-client';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
// import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

import quizApp from './reducers';
import dataSaga from './actions/saga.js';
import { remoteActions } from './middleware/remoteActions';
require('dotenv').config();

const config = require('./config/config');
const socket = openSocket(config.portDev);

// const savedState = localStorage.get('state') || undefined;

const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const store = createStore(
    quizApp,
    applyMiddleware(sagaMiddleware, remoteActions(socket))
  );
  sagaMiddleware.run(dataSaga);
  return store;
};

let store = configureStore();

render(
  <Provider store={store}>
    <App socket={socket} />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
