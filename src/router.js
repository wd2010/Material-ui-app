import React from 'react'
import {Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import {ThemeProvider} from 'styled-components';
import { MuiThemeProvider} from 'material-ui/styles';
import {theme,styledTheme} from './public/Theme';

const Loading=(props)=>
  <div>Loading...</div>


const LoadableTab = Loadable({
  loader: () =>import(/* webpackChunkName: 'Tab' */'./components/Tab'),
  loading: Loading,
});
const LoadableUser = Loadable({
  loader: () =>import(/* webpackChunkName: 'User' */'./containers/User'),
  loading: Loading,
});

const Routers=({isProd=false})=> (
  <MuiThemeProvider theme={theme} sheetsManager={isProd?(new Map()):null}>
    <ThemeProvider theme={styledTheme}>
      <Switch>
        <Route path='/user' component={LoadableUser} />
        <Route path='/article' component={LoadableUser} />
        <Route path='/' component={LoadableTab} />
      </Switch>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default Routers;