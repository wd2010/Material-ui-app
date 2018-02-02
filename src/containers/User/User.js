import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../../store/actions/home';
import {Link ,withRouter} from 'react-router-dom';
import ReturnTitle from "../../components/Title/ReturnTitle";
import Nav from '../../components/Nav';
import Container from '../../components/Container';
import styled from 'styled-components';
import {Button,Avatar} from 'material-ui';
import UserPosts from './UserPosts';
const UserContent=styled.div`
  .bg{
    position: relative;
    height: 200px;
    overflow: hidden;
    >div{
      width: 100%;
      height: 100%;
      position: absolute;
      background: ${props=>props.theme.palette.background.title};
    }
    >img{
      width: 100%;
      height: 100%;
    }
  }
  .user-info{
    height: 180px;
    background: ${props=>props.theme.palette.background.contentFrame};
    text-align: center;
    padding: 0 20px;
    margin-bottom: 10px;
    .avatar{
      position: relative;
      margin-top: -44px;
      >div{
        width: 80px;
        height: 80px;
        padding: 4px;
        border-radius: 44px;
        background: #fff;
        display: inline-block;
        >div{
          width: 100%;
          height: 100%;
        }
      }
    }
    .info{
      margin-top: -20px;
    }
  }
`
class User extends Component{
  constructor(props){
    super(props)
    this.state={
      scrollH:0,
    }
    this.handleScroll=this.handleScroll.bind(this);
  }
  handleScroll(){

    let scrollH=document.documentElement.scrollTop;
    this.setState({scrollH})

  }
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll,false);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll)
  }
  render(){
    let {titleDirection,direction}=this.props;
    let {scrollH} = this.state;
    let titleHide=titleDirection?false:(direction==2?true:false);
    let navHide=direction==2?true:false;
    let opacity=scrollH<(200-56)?scrollH/(200-56):1;
    let avatarOpacity=opacity<=0.4?1:(opacity<=0.8? 1-10*(opacity-0.4) :0)
    return (
      <div style={{height: '2000px'}}>

        <ReturnTitle  opacity={opacity} />
        <UserContent >
          <div className='bg'>
            <div style={{opacity}}></div>
            <img src="http://img.netbian.com/file/2018/0127/4c3f9ef69521e589e2e432a8875c65bd.jpg" alt=""/>
          </div>
          <div className='user-info'>
            <div className='avatar' style={{opacity:avatarOpacity}}>
              <div>
                <Avatar alt="Remy Sharp" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1517538793&di=b8b8067a73512c92a387dfd0b60d2674&src=http://e.hiphotos.baidu.com/zhidao/pic/item/a2cc7cd98d1001e955722f30b90e7bec54e79746.jpg"  />
              </div>
            </div>
            <div className='info'>
              <h4>wd2010</h4>
              <Button raised color="primary">编辑个人资料</Button>
            </div>
          </div>
          <UserPosts />
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
