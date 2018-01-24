import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TabContent from './TabContent';
import Scroll from './Scroll';
import Container from './Container';
import Title from './Title/Index';
import Nav from './Nav';
import {createSelector} from 'reselect'
const Tab =({titleHide,navHide,titleType})=>{
  return (
    <div>
      <Container type='title' hide={titleHide}>
        <Title type={titleType} />
      </Container>
      <TabContent/>
      <Container type='menu' hide={navHide}>
        <Nav />
      </Container>
      <Scroll />
    </div>
  )
}

const scrollSelector=createSelector([
  state=>state.router.location.pathname,
  state=>state.Scroll.direction,
  state=>state.Scroll.titleDirection,
],(pathname,direction,titleDirection)=>{
  switch(pathname){
    case '/':
    case '/home':
    case '/post':
    case '/usercenter':
      return {titleHide:false,navHide:false,titleType:'search'};

    case '/user':
      return {
        titleHide:titleDirection?false:(direction==2?true:false),
        navHide: direction==2?true:false,
        titleType:'usercenter'
      }
    default:
      return {titleHide:false,navHide:false,titleType:'search'};
  }
})

const mapStateToProps=(state)=>({
  titleHide: scrollSelector(state).titleHide,
  navHide: scrollSelector(state).navHide,
  titleType: scrollSelector(state).titleType,
})

const mapDispatchToProps=(dispatch)=>bindActionCreators({

},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Tab)
