import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch,withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import styled from 'styled-components';
const Loading=(props)=>
  <div>Loading...</div>

const LoadableTab = Loadable({
  loader: () =>import(/* webpackChunkName: 'Tab' */'../components/Tab'),
  loading: Loading,
});
const LoadableUser = Loadable({
  loader: () =>import(/* webpackChunkName: 'User' */'./User'),
  loading: Loading,
});

let minH= process.env.NODE_BUILD==='client' && window.innerHeight || 1500
const AppContainer=styled.div`
  min-height: ${minH}px;
  background: ${props=>props.theme.palette.background.page};
`

const App=()=>{
  return(
    <AppContainer>
      <Switch>
        <Route path='/user/:userid' component={LoadableUser} />
        <Route path='/article' component={LoadableTab} />
        <Route path='/' component={LoadableTab} />
      </Switch>
    </AppContainer>
  )
}

export default App;