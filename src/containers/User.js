import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../store/actions/home';
import {Link ,withRouter} from 'react-router-dom';
import ReturnTitle from "../components/Title/ReturnTitle";
import Nav from '../components/Nav';
import Container from '../components/Container';
import styled from 'styled-components';
import {Button,Avatar} from 'material-ui';
const UserContent=styled.div`
  .bg{
    position: relative;
    height: 200px;
    overflow: hidden;
    &:before{
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: red;
      opacity: 0.5;
    }
    >img{
      width: 100%;
    }
  }
  .user-info{
    height: 200px;
    background: ${props=>props.theme.palette.background.contentFrame};
    text-align: center;
    padding: 0 20px;
    .avatar{
      position: relative;
      margin-top: -30px;

      >div{
        width: 80px;
        height: 80px;
        padding: 10px;
        border-radius: 40px;
        background: #fff;
      }
    }
    .info{}
  }
`
class User extends Component{

  render(){
    let {titleDirection,direction}=this.props;
    let titleHide=titleDirection?false:(direction==2?true:false);
    let navHide=direction==2?true:false;
    return (
      <div style={{height: '2000px'}}>
        <ReturnTitle />
        <UserContent>
          <div className='bg'>
            <img src="http://bpic.588ku.com/back_pic/03/52/41/215794509beebb9.jpg!ww400" alt=""/>
          </div>
          <div className='user-info'>
            <div className='avatar'>
              <div>
                <Avatar alt="Remy Sharp" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1516783928&di=5993104b0e8f5060411f270d91b710da&src=http://wenwen.soso.com/p/20110627/20110627184931-1448979489.jpg"  />
              </div>

            </div>
            <div className='info'>
              <h4>wd2010</h4>
              <Button raised color="primary">编辑个人资料</Button>
            </div>
          </div>
        </UserContent>
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
