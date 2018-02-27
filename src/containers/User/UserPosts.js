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

const AppBarHead=styled(AppBar)`
  &&{
    position:sticky;
    top:56px;
    background: ${props=>props.theme.palette.background.contentFrame};
  }
`
class UserPosts extends PureComponent{
  state={index:0}
  handleChange(value){
    this.setState({index:value})
  }

  render(){
    return (
      <div style={{minHeight:`${typeof(window)==='undefined'?1500: window.innerHeight-200-140}px`}}>
        <AppBarHead  color="default">
          <Tabs value={this.state.index} onChange={(e,value)=>this.handleChange(value)} indicatorColor="primary" textColor="primary" fullWidth>
            <Tab label="个人作品" />
            <Tab label="工作经历" />
            <Tab label="项目经验" />
          </Tabs>
        </AppBarHead>
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChange.bind(this)} >
          <Dynamic />
          <Article />
          <Answer />
        </SwipeableViews>
      </div>
    )
  }
}

export default withRouter(UserPosts)
