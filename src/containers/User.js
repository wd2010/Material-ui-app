import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../store/actions/home';
import {Link ,withRouter} from 'react-router-dom';
import ReturnTitle from "../components/Title/ReturnTitle";
import Nav from '../components/Nav';
import Container from '../components/Container';

class User extends Component{

  render(){
    let {titleDirection,direction}=this.props;
    let titleHide=titleDirection?false:(direction==2?true:false);
    let navHide=direction==2?true:false;
    return (
      <div style={{height: '2000px'}}>
        <Container type='title' hide={titleHide}>
          <ReturnTitle />
        </Container>
        <h1>User11134234页面</h1>
        <Container type='menu' hide={navHide}>
          <Nav />
        </Container>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  titleDirection: state.Scroll.titleDirection,
  direction: state.Scroll.direction,
})

export default connect(mapStateToProps)(withRouter(User))
