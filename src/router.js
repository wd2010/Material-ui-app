import React from 'react'
import {Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { MuiThemeProvider} from 'material-ui/styles';
import {theme} from './public/Theme';

const Loading=(props)=>
  <div>Loading...</div>


const LoadableHome = Loadable({
  loader: () =>import(/* webpackChunkName: 'Tab' */'./components/Tab'),
  loading: Loading,
});
const LoadableUser = Loadable({
  loader: () =>import(/* webpackChunkName: 'User' */'./containers/User'),
  loading: Loading,
});

const Routers=({isProd=false})=> (
  <MuiThemeProvider theme={theme} sheetsManager={isProd?(new Map()):null}>
    <Switch>
      <Route path='/user' component={LoadableUser} />
      <Route path='/article' component={LoadableUser} />
      <Route path='/' component={LoadableHome} />
    </Switch>
  </MuiThemeProvider>
)

export default Routers;