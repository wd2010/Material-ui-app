import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch,withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import {ThemeProvider} from 'styled-components';
import { MuiThemeProvider,createMuiTheme} from 'material-ui';
import {styledTheme} from './public/Theme';

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

const Routers=({isProd=false,themeColor,mode})=>{
  const themes=styledTheme({themeColor,mode})
  return(
    <MuiThemeProvider theme={createMuiTheme(themes)} sheetsManager={isProd?(new Map()):null}>
      <ThemeProvider theme={themes}>
        <Switch>
          <Route path='/user' component={LoadableUser} />
          <Route path='/article' component={LoadableUser} />
          <Route path='/' component={LoadableTab} />
        </Switch>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

const mapStateToProps=(state)=>({
  themeColor: state.Config.themeColor,
  mode: state.Config.mode,
})

export default withRouter(connect(mapStateToProps)(Routers));