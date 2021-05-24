import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import {ConfigProvider} from 'antd'
import frFR from 'antd/es/locale/ru_RU'
import fren from 'antd/es/locale/en_US'
import 'moment/locale/ru'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import 'react-quill/dist/quill.snow.css'; // ES6

import './index.scss';
import reportWebVitals from './reportWebVitals';
import moment from "moment";
import RouteApp from './Components/Route/Route'
moment.locale(localStorage.getItem('lang')!== null?localStorage.getItem('lang')==="EN"?'en':'ru':'ru')

ReactDOM.render(
  <React.StrictMode>
      <ConfigProvider locale={localStorage.getItem('lang')!== null?localStorage.getItem('lang')==="EN"?fren: frFR:frFR}>
        <RouteApp/>
      </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
