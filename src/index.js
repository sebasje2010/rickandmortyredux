import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {charactersReducer} from './reducers/characters'
import { Provider } from 'react-redux';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import {featuring, logger} from './middlewares'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const composedEnhancers=compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger,featuring))
const store=createStore(charactersReducer,composedEnhancers)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
