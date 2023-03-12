import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import { Provider } from 'react-redux';
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewares'
import thunk from 'redux-thunk';
import './index.css';
import rootReducer from './reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const composeAlt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composedEnhancers=composeAlt(applyMiddleware(thunk,logger))
const store=createStore(rootReducer,composedEnhancers)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
