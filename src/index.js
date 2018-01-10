import React from 'react';
import {hydrate,render} from 'react-dom';
import {createBrowserHistory} from 'history'
import Loadable from 'react-loadable';
import createApp from './createApp';
import configureStore from './store/configureStore';

let {store,history}=configureStore()

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



