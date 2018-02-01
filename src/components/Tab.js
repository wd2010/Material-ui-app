import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TabContent from './TabContent';
import Container from './Container';
import Title from './Title/Index';
import Nav from './Nav';
import {createSelector} from 'reselect';

const Tab =({titleHide,navHide})=>{
  return (
    <div>
      <Container type='title' hide={titleHide}>
        <Title  />
      </Container>
      <TabContent/>
      <Container type='menu' hide={navHide}>
        <Nav />
      </Container>
    </div>
  )
}

const scrollSelector=createSelector([
  state=>state.router.location,
  state=>state.Scroll.direction,
  state=>state.Scroll.titleDirection,
],({pathname},direction,titleDirection)=>{
  switch(pathname){
    case '/':
    case '/home':
    case '/post':
    case '/user':
      return {titleHide:false,navHide:false};
    case '/theme':
      return {titleHide:false,navHide:true}
  }
})

const mapStateToProps=(state)=>({
  titleHide: scrollSelector(state).titleHide,
  navHide: scrollSelector(state).navHide,
})

const mapDispatchToProps=(dispatch)=>bindActionCreators({

},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Tab)
