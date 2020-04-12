import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import {history} from './history';
import App from './app';
import store from './store';

ReactDOM.render(
  // даем react-redux понять что такое стор
  //у privider ссылка на store, у store ссылка на dispatch
  <Provider store={store}> 
    <ConnectedRouter history={history}>
  <App />
  </ConnectedRouter>
</Provider>,
  document.getElementById('root')
);
