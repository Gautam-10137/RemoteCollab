import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './tailwind.css';
import {Provider} from 'react-redux';
import store from "./redux/auth/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  to provide the valued of redux we need to use the below method
      <Provider store = {store}>
      <App />
      </Provider>
);

