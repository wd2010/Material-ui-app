import React from 'react';
import {Provider} from 'react-redux';
import Routers from './router';
import  {ConnectedRouter}  from 'react-router-redux';
import RemoveServerSideCss from './public/RemoveServerSideCss';
import Scroll from './components/Scroll';
const createApp=({store,history})=>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RemoveServerSideCss>
        <Routers />
        <Scroll />
      </RemoveServerSideCss>
    </ConnectedRouter>
  </Provider>

export default createApp;
