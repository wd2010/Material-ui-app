import React,{Component} from 'react';
import {connect} from 'react-redux';
import  {BottomNavigation, BottomNavigationAction, withStyles } from 'material-ui';
import {Home as HomeIcon,Menu as MenuIcon ,Person as PersonIcon} from 'material-ui-icons';
import {push} from 'react-router-redux';
import styled,{withTheme} from 'styled-components';

let Navigation=styled(BottomNavigation)`
  width: 100%;
  border-top: 1px solid #eee;
`
let Button=styled(BottomNavigationAction)`
    color: ${props=>((props.value=='/home' && props.pathname==='/') ||(props.value===props.pathname))?props.theme.palette.primary['500']:''};
  `
class Nav extends Component{
  changeRouter(e,path){
    this.props.dispatch(push(path))
  }

  render(){
    const {pathname,style}=this.props;
    return (
      <Navigation style={style} value={pathname} showLabels onChange={::this.changeRouter} >
        <Button label="首页" pathname={pathname} value="/home" icon={<HomeIcon />} />
        <Button label="专栏" pathname={pathname} value="/post" icon={<MenuIcon />} />
        <Button label="用户" pathname={pathname} value="/usercenter" icon={<PersonIcon />} />
      </Navigation>
    )
  }
}

const mapStateToProps=(state)=>({
  pathname: state.router.location.pathname,
})

export default connect(mapStateToProps)(withTheme(Nav))