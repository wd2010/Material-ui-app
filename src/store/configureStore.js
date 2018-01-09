import {createStore, applyMiddleware,compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {createMemoryHistory,createBrowserHistory} from 'history';
import {  routerReducer, routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers/index.js';
//浏览器开发工具
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

console.log('【NODE_BUILD】',process.env.NODE_BUILD)
let createHistory=process.env.NODE_BUILD==='client'?createBrowserHistory:createMemoryHistory;
const routerReducers=routerMiddleware(createHistory());//路由
const composeEnhancers = composeWithDevTools

const middleware=[thunkMiddleware,routerReducers];

let configureStore=(initialState)=>createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(...middleware)));

export default configureStore;
