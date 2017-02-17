import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux"
import allReducer from "./reducers/index.js"
import App from "./components/app.js";


const store = createStore(allReducer);
ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>
    ,
    document.getElementById('root')
);
