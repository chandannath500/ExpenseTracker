import React from 'react';
import ReactDom from 'react-dom';
import "./scss/index.css";
import {Provider} from './context/context';
import App from './App';

ReactDom.render(
    <Provider><App/></Provider>
, document.getElementById('root')
);
