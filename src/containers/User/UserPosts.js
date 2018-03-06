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
import Loading from '../../components/Loading.js';

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
const Skill = Loadable({
  loader: () =>import(/* webpackChunkName: 'Skill' */'./Skill'),
  loading: Loading,
});

const AppBarHead=styled(AppBar)`
  &&{
    position:sticky;
    top:0;
    background: ${props=>props.theme.palette.background.contentFrame};
    margin-bottom: 10px;
    span{
      color: rgba(0,0,0,0.8);
    }
  }
`
class UserPosts extends PureComponent{
  state={index:0}
  handleChange(value){
    this.setState({index:value})
  }

  render(){
    let {index}=this.state;
    console.log(index)
    return (
      <div style={{minHeight:`${typeof(window)==='undefined'?1500: window.innerHeight-200-140}px`,fontSize:'14px'}}>
        <AppBarHead  color="default">
          <Tabs value={index} onChange={(e,value)=>this.handleChange(value)} indicatorColor="primary" textColor="primary" fullWidth>
            <Tab label="工作经历" />
            <Tab label="项目经验" />
            <Tab label="个人作品" />
            <Tab label="个人技能" />
          </Tabs>
        </AppBarHead>
        <SwipeableViews index={index} onChangeIndex={this.handleChange.bind(this)} >
          {index=='0' && <Article />}
          {index=='1' && <Answer />}
          {index=='2' && <Dynamic />}
          {index=='3' && <Skill />}
        </SwipeableViews>
      </div>
    )
  }
}

export default withRouter(UserPosts)
