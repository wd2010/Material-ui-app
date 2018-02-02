import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../../store/actions/home';
import {Link ,withRouter,Switch,Route} from 'react-router-dom';
import styled from 'styled-components';
import {AppBar,Tabs, Typography} from 'material-ui';
import { Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3}}>
      {children}
    </Typography>
  );
}

const mapIndexToRouter=(value,userid)=>value===0?`/user/${userid}/dynamic`:(value===1?`/user/${userid}/answer`:`/user/${userid}/article`)

class UserPosts extends Component{

  handleChange(...args){
    let {history,match:{params:{userid}}}=this.props;
    let router=mapIndexToRouter(args[args.length-1],userid)
    history.replace(router)
  }


  render(){
    let {location:{pathname}}=this.props;

    let index=pathname.endsWith('/dynamic')?0:(pathname.endsWith('/answer')?1:2)
    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs value={index} onChange={::this.handleChange} indicatorColor="primary" textColor="primary" fullWidth>
            <Tab label="动态" />
            <Tab label="回答" />
            <Tab label="文章" />
          </Tabs>
        </AppBar>
        <SwipeableViews axis= 'x' index={index} onChangeIndex={::this.handleChange}>


                <TabContainer dir={'rtl'}>动态</TabContainer>

                <TabContainer dir={'rtl'}>回答</TabContainer>


                <TabContainer dir={'rtl'}>文章</TabContainer>



        </SwipeableViews>
      </div>
    )
  }

}

export default withRouter(UserPosts)
