import React from 'react'
import {Route, Switch,withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { MuiThemeProvider} from 'material-ui/styles';
import {theme} from './public/Theme';

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

const Routers=({isServer=false})=> (
  <MuiThemeProvider theme={theme} sheetsManager={isServer?(new Map()):null}>
    <Switch>
      <Route path='/user' component={LoadableUser} />
      <Route path='/article' component={LoadableUser} />
      <Route path='/' component={LoadableTab} />
    </Switch>
  </MuiThemeProvider>
)

export default withRouter(Routers);