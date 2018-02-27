import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../../store/actions/home';
import {Link ,withRouter,Switch,Route} from 'react-router-dom';
import styled from 'styled-components';
import {AppBar,Tabs, Typography} from 'material-ui';
import { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Loadable from 'react-loadable';

const Loading=(props)=>
  <div>Loading...</div>

const Dynamic = Loadable({
  loader: () =>import(/* webpackChunkName: 'Dynamic' */'./Dynamic'),
  loading: Loading,
});
const Answer = Loadable({
  loader: () =>import(/* webpackChunkName: 'Answer' */'./Answer'),
  loading: Loading,
});
const Article = Loadable({
  loader: () =>import(/* webpackChunkName: 'Article' */'./Article'),
  loading: Loading,
});


const mapIndexToRouter=(value,userid)=>value===2?`/user/${userid}/article`:(value===1?`/user/${userid}/answer`:`/user/${userid}/dynamic`)

const AppBarHead=styled(AppBar)`
  &&{
    position:sticky;
    top:56px;
    background: ${props=>props.theme.palette.background.contentFrame};
  }
`
class UserPosts extends PureComponent{

  handleChange(value){
    let {history,match:{params:{userid}}}=this.props;
    let router=mapIndexToRouter(value,userid)
    history.replace(router)
  }

  render(){
    let {location:{pathname},match: {params:{userid}}}=this.props;
    let index=pathname.endsWith('/dynamic')?0:(pathname.endsWith('/answer')?1:2);
    let path=pathname.match(/\/(\w+)$/g)[0];
    let routeComponent=path==='/article'?Article:(path==='/answer'?Answer:Dynamic);

    return (
      <div style={{minHeight:`${window.innerHeight-200-140}px`}}>
        <AppBarHead  color="default">
          <Tabs value={index} onChange={(e,value)=>this.handleChange(value)} indicatorColor="primary" textColor="primary" fullWidth>
            <Tab label="动态" />
            <Tab label="回答" />
            <Tab label="文章" />
          </Tabs>
        </AppBarHead>
        <Typography component="div" style={{padding: '10px 0'}}>
          <Route pathname={pathname} component={routeComponent} />
        </Typography>
      </div>
    )
  }
}

export default withRouter(UserPosts)
