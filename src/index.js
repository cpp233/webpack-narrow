import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import PromisePolyfill from 'promise-polyfill';
import $ from 'jquery';
// import 'react-app-polyfill/ie9';
// import 'react-app-polyfill/stable';

import 'antd/dist/antd.css';
// import 'antd/dist/antd.min.css';

if (!window.Promise) {
  window.Promise = PromisePolyfill;
}

import store from './redux/store';

// hook
const app = document.createElement('div');
app.id = 'myApp';
document.body.append(app);
app.style.position = 'absolute';
app.style.zIndex = '1';

// app.style.right = '5%';
// app.style.top = '5%';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Provider>,
  document.getElementById('myApp')
);
