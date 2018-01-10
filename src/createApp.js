import React from 'react';
import {Provider} from 'react-redux';
import Routers from './router';
import Loadable from 'react-loadable';
import  {ConnectedRouter}  from 'react-router-redux';
import RemoveServerSideCss from './public/RemoveServerSideCss';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import preset from 'jss-preset-default';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';


const createApp=({store,history,modules,sheetsCreate=[]})=>{
  let isServer=process.env.NODE_BUILD==='server'
  if(isServer){
    const jss = create(preset());
    const generateClassName = createGenerateClassName();
    const sheetsRegistry = new SheetsRegistry();
    let rootString= (
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <JssProvider registry={sheetsRegistry} jss={jss} generateClassName={generateClassName}>
              <Routers isServer={isServer} />
            </JssProvider>
          </ConnectedRouter>
        </Provider>
      </Loadable.Capture>
    )
    sheetsCreate.push(sheetsRegistry);
    return rootString;
  }else{
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <RemoveServerSideCss>
            <Routers />
          </RemoveServerSideCss>
        </ConnectedRouter>
      </Provider>
    )
  }

}

export default createApp;
