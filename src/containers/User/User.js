import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../../store/actions/home';
import {Link ,withRouter} from 'react-router-dom';
import styled from 'styled-components';
import {Button,Avatar} from 'material-ui';
import UserPosts from './UserPosts';
import {ContactPhone as PhoneIcon, ContactMail as ContactMailIcon} from 'material-ui-icons'
import header from '../../assets/img/header.jpg'
const UserContent=styled.div`
  .bg{
    position: relative;
    height: 150px;
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
    height: 140px;
    background: ${props=>props.theme.palette.background.contentFrame};
    text-align: center;
    padding: 0 20px;
    margin-bottom: 10px;
    .avatar{
      position: relative;
      >div{
        margin-top: -44px;
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
      >div:first-child{
        margin-top: 20px;
        >span{
          font-weight: 700;
          font-size: 1.5rem;
        }
      }
      .connection{
        margin-top: 5px;
        font-size: 0.9rem;
        >div{
          display: inline-block;
          >svg{
            width: 18px;
            height: 18px;
            vertical-align: middle;
            color: #2979FF;
          }
        }
        }
      }
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
    this.setState({scrollH:document.documentElement.scrollTop})
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
    let opacity=scrollH<(150)?scrollH/(150):1;
    let avatarOpacity=opacity<=0.4?1:(opacity<=0.8? 1-10*(opacity-0.4) :0)

    return (
      <div style={{minHeight: `${process.env.NODE_BUILD==='client' ? window.innerHeight : 1500}px`}}>
        <UserContent >
          <div className='bg'>
            <div style={{opacity,'MozOpacity':opacity,'KhtmlOpacity':opacity}}></div>
            <img src={require('../../assets/img/bg.jpg')} alt=""/>
          </div>
          <div className='user-info'>
            <div className='avatar' style={{opacity:avatarOpacity,'MozOpacity':avatarOpacity,'KhtmlOpacity':avatarOpacity}}>
              <div>
                <Avatar alt="name" src={header}  />
              </div>
            </div>
            <div className='info'>
              <div><span>李伟桥</span> 编辑/文案</div>
              <div>
                <span>湘潭大学</span> | <span>汉语言文学</span> | <span>3年工作经验</span>
              </div>
              <div className='connection'>
                <div style={{width:'40%'}}><PhoneIcon /> 13533142854</div>
                <div style={{width:'60%'}}><ContactMailIcon /> 1406137569@qq.com</div>
              </div>
            </div>
          </div>
          <UserPosts />
        </UserContent>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  titleDirection: state.Scroll.titleDirection,
  direction: state.Scroll.direction,
})

export default connect(mapStateToProps)(withRouter(User))
