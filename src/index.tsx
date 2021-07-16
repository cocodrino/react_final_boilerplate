import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./state/store";

if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    worker.start().then(() =>
        console.info(`MOCKING SERVER RUNNING..
             REMEMBER STOP THE WORKER WHEN WORKS WITH THE
             REAL API!!!...
        `))
}

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
