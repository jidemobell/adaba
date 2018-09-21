import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


import App from './container/App/App';

import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(Thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
