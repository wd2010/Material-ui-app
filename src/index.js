import React from 'react';
import {hydrate,render} from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import Loadable from 'react-loadable';
import createApp from './createApp';
import configureStore from './store/configureStore';
// import * as OfflinePluginRuntime from 'offline-plugin/runtime';
// OfflinePluginRuntime.install();

const initialState =window && window.__INITIAL_STATE__;
let history=createHistory()

let store=configureStore(initialState)

const renderDom=process.env.NODE_ENV==='production'?hydrate:render;
const renderApp=()=>{
  let application=createApp({store,history});
  renderDom(application,document.getElementById('root'));
}

window.main = () => {
  Loadable.preloadReady().then(() => {
    renderApp()
  });
};


if(process.env.NODE_ENV==='development'){
  if(module.hot){
    module.hot.accept('./store/configureStore.js',()=>{
      let newReducer=require('./store/reducers/index.js');
      store.replaceReducer(newReducer)
      /*import('./store/reducers/router.js').then(({default:module})=>{
        store.replaceReducer(module)
      })*/
    })
    module.hot.accept('./createApp.js',()=>{
      let createApp=require('./createApp.js');
      let newReducer=require('./store/reducers/index.js');
      store.replaceReducer(newReducer)
      let application=createApp({store,history});
      render(application,document.getElementById('root'));
      /*import('./app/router.js').then(({default:module})=>{
        let {createApp}=module;
        import('./store/reducers/router.js').then(({default:module})=>{
          store.replaceReducer(module)
          let application=createApp({store,history});
          render(application,document.getElementById('root'));
        })
      })*/
    })
  }
}



