import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components'
import {List, ListItem, ListItemText,Avatar, Divider, ListItemIcon , Switch } from 'material-ui';
import {
  Brush as ThemeIcon, Brightness5 as DayIcon, Brightness4 as NightIcon, BorderColor as EditorIcon,
  Star as StarIcon, LocalOffer as LocalOfferIcon
} from 'material-ui-icons';
import * as actions from '../store/actions/Config';
import {createSelector} from 'reselect';

const UserList = styled(List)`
    &&{
      border-top: 1px solid ${props => props.theme.palette.background.contentFrame};
      border-bottom: 1px solid ${props => props.theme.palette.background.contentFrame};
      padding: 0;
      margin-bottom: 5px;
      background: ${props => props.theme.palette.background.contentFrame};
    }
  `
const AvatarHead=styled(Avatar)`
  width: 60;
  height:60;
`
const UserContainer=styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  background: ${props=>props.theme.palette.background.page}
`
class UserCenter extends Component{
  //白天黑夜模式
  handleSwitchMode({value}){
    if((typeof value)!== 'undefined'){
      this.props.SwitchThemeAct({value})
    }
  }
  //选择主题
  handleSelectTheme(){
    let {history,location:{pathname}}=this.props;
    history.push('/theme',{from:pathname,title:'主题'})
  }
  render(){
    let {checked}=this.props;
    return (
      <UserContainer>
        <UserList >
          <ListItem button>
            <AvatarHead alt="wd2010" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1516783928&di=5993104b0e8f5060411f270d91b710da&src=http://wenwen.soso.com/p/20110627/20110627184931-1448979489.jpg" />
            <ListItemText primary="wd2010" secondary="查看或编辑个人主页" />
          </ListItem>
        </UserList>
        <UserList >
          <ListItem button onClick={()=>this.handleSwitchMode({value: !checked})}>
            { checked ?
              (<ListItemIcon><NightIcon /></ListItemIcon>):
              (<ListItemIcon><DayIcon /></ListItemIcon>)
            }
            <ListItemText primary={`${checked?'夜间模式':'白天模式'}`}   />
            <Switch
              style={{height:'21px'}}
              checked={checked}
              onChange={(e,value)=>this.handleSwitchMode({value})}
              aria-label="夜间模式"
            />
          </ListItem>
          <Divider inset />
          <ListItem button onClick={::this.handleSelectTheme}>
            <ListItemIcon>
              <ThemeIcon />
            </ListItemIcon>
            <ListItemText primary="主题选择"  />
          </ListItem>
        </UserList>
        <UserList >
          <ListItem button >
            <ListItemIcon><EditorIcon /></ListItemIcon>
            <ListItemText primary='我的创作'   />
          </ListItem>
          <Divider inset />
          <ListItem button >
            <ListItemIcon><StarIcon /></ListItemIcon>
            <ListItemText primary='我的收藏'   />
          </ListItem>
          <Divider inset />
          <ListItem button >
            <ListItemIcon><LocalOfferIcon /></ListItemIcon>
            <ListItemText primary='我的标签'   />
          </ListItem>
          <Divider inset />
          <ListItem button >
            <ListItemIcon><EditorIcon /></ListItemIcon>
            <ListItemText primary='我的创作'   />
          </ListItem>
          <Divider inset />
          <ListItem button >
            <ListItemIcon><StarIcon /></ListItemIcon>
            <ListItemText primary='我的收藏'   />
          </ListItem>
          <Divider inset />
          <ListItem button >
            <ListItemIcon><LocalOfferIcon /></ListItemIcon>
            <ListItemText primary='我的标签'   />
          </ListItem>
          <Divider inset />
          <ListItem button >
            <ListItemIcon><EditorIcon /></ListItemIcon>
            <ListItemText primary='我的创作'   />
          </ListItem>
          <Divider inset />
          <ListItem button >
            <ListItemIcon><StarIcon /></ListItemIcon>
            <ListItemText primary='我的收藏'   />
          </ListItem>
          <Divider inset />
          <ListItem button >
            <ListItemIcon><LocalOfferIcon /></ListItemIcon>
            <ListItemText primary='我的标签'   />
          </ListItem>

        </UserList>
      </UserContainer>
    )
  }

}

const switchSelector=createSelector([
  state=>state.Config.mode
],(mode)=>{
  return mode?false:true;
})

const mapStateToProps=(state)=>({
  checked: switchSelector(state)
})

const mapDispatchToProps=(dispatch)=>bindActionCreators({
  SwitchThemeAct: actions.SwitchTheme,
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(UserCenter))