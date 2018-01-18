import React,{Component} from 'react';
import {connect} from 'react-redux';
import  {BottomNavigation, BottomNavigationAction, withStyles } from 'material-ui';
import {Home as HomeIcon,Menu as MenuIcon ,Person as PersonIcon} from 'material-ui-icons';
import {push} from 'react-router-redux';
import styled,{withTheme} from 'styled-components';


class Nav extends Component{

  changeRouter(e,path){

    this.props.dispatch(push(path))
  }
  render(){
    const {pathname}=this.props;
    let Navigation=styled(BottomNavigation)`
      position: fixed;
      bottom: 0;
      width: 100%;
      border-top: 1px solid #eee;
    `
    let Button=styled(BottomNavigationAction)`
      color: ${props=>((props.value=='/home' && pathname==='/') ||(props.value===pathname))?props.theme.palette.primary['500']:''};
    `
    return (
      <Navigation value={pathname} showLabels onChange={::this.changeRouter} >
        <Button label="首页" value="/home" icon={<HomeIcon />} />
        <Button label="专栏" value="/post" icon={<MenuIcon />} />
        <Button label="用户" value="/usercenter" icon={<PersonIcon />} />
      </Navigation>
    )
  }
}

const mapStateToProps=(state)=>({
  pathname: state.router.location.pathname,
})

export default connect(mapStateToProps)(withTheme(Nav))