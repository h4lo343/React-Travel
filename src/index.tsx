import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "antd/dist/antd.min.css"
import './i18n/config'
import {Provider} from "react-redux"
import { BrowserRouter } from 'react-router-dom';
import rootstore from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';
import { Spin } from 'antd';
import axios from 'axios'

axios.defaults.headers['x-icode'] = "5AFFC4226F716869"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={rootstore.store}>
    <React.StrictMode>
      <PersistGate loading={<Spin/>} persistor={rootstore.persistor}>
        <App/>
      </PersistGate>
    </React.StrictMode>
  </Provider>
</BrowserRouter>
   
   
);

