import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styled,{withTheme} from 'styled-components'
import {List, ListItem, ListItemText,Avatar, Divider, ListItemIcon , Switch } from 'material-ui';
import {Menu as MenuIcon, Brightness5 as DayIcon, Brightness4 as NightIcon} from 'material-ui-icons';
const UserList=styled(List)`
  &&{
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 0;
  margin-bottom: 5px;
  background: ${props=>props.theme.palette.background.contentFrame}
  }
`
const AvatarHead=styled(Avatar)`
  width: 60;
  height:60;
`
const UserContainer=styled.div`
  background: ${props=>props.theme.palette.background.page}
`
class UserCenter extends Component{

  handleSwitchTheme(e){
    e.stopPropagation()
    console.log('yyy',e.target)
  }

  render(){

    return (
      <UserContainer>
        <UserList>
          <ListItem button>
            <AvatarHead alt="wd2010" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1516783928&di=5993104b0e8f5060411f270d91b710da&src=http://wenwen.soso.com/p/20110627/20110627184931-1448979489.jpg" />
            <ListItemText primary="wd2010" secondary="查看或编辑个人主页" />
          </ListItem>
        </UserList>
        <UserList >
          <ListItem button onClick={::this.handleSwitchTheme}>
            <ListItemIcon>
              <DayIcon />
            </ListItemIcon>
            <ListItemText primary="夜间模式"  />
            <Switch
              checked={true}
              onChange={::this.handleSwitchTheme}
              aria-label="夜间模式"
            />
          </ListItem>
          <Divider inset />
          <ListItem button>
            <ListItemIcon>
              <NightIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
        </UserList>
      </UserContainer>
    )
  }

}



export default withTheme(UserCenter)