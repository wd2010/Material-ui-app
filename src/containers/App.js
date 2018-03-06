import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch,withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import styled from 'styled-components';
import Loading from '../components/Loading.js'

const LoadableUser = Loadable({
  loader: () =>import(/* webpackChunkName: 'User' */'./User/User.js'),
  loading: Loading,
});

const AppContainer=styled.div`
  background: ${props=>props.theme.palette.background.page};
`
const App=()=>{
  return(
    <AppContainer>
      <Switch>
        <Route path='/' component={LoadableUser} />
      </Switch>
    </AppContainer>
  )
}

export default App;