import React from 'react';
import {Provider} from 'react-redux';
import Routers from './router';
import  {ConnectedRouter}  from 'react-router-redux';
import RemoveServerSideCss from './public/RemoveServerSideCss';
import {styledTheme} from './public/Theme';
import {ThemeProvider} from 'styled-components';

const createApp=({store,history})=>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={styledTheme}>
        <RemoveServerSideCss>
          <Routers />
        </RemoveServerSideCss>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>




export default createApp;
