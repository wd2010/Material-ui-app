import {createStore, applyMiddleware,compose} from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import {createMemoryHistory,createBrowserHistory} from 'history';
import { routerMiddleware } from 'react-router-redux';
import {watchIncrementAsync} from './sagas/count';
const sagaMiddleware = createSagaMiddleware()

//浏览器开发工具
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
let configureStore=(rootReducer)=>{
  let initialState = '';
  let history =createMemoryHistory()
  if(process.env.NODE_BUILD==='client'){
    history=createBrowserHistory()
    initialState=window && window.__INITIAL_STATE__;
  }

  const routerReducers=routerMiddleware(history);//路由
  const composeEnhancers =composeWithDevTools;

  const middleware=[sagaMiddleware,routerReducers,thunkMiddleware];
  let store=createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(...middleware)))
  sagaMiddleware.run(watchIncrementAsync)
  return {
    history,
    store
}};

export default configureStore;
