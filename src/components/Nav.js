import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  {BottomNavigation, BottomNavigationAction, withStyles } from 'material-ui';
import {Home as HomeIcon,Favorite as FavoriteIcon,Search as SearchIcon,Person as PersonIcon} from 'material-ui-icons';
import {push} from 'react-router-redux';
import styled from 'styled-components';

class Nav extends Component{
  state={
    selectPath:'/'
  }
  changeRouter(e,path){
    this.setState({selectPath:path})
    this.props.dispatch(push(path))
  }
  render(){
    const {pathname}=this.props;
    let Button=styled(BottomNavigationAction)`
     &&{ 
      color: ${props=>props.value==pathname?'red':''}
     }
    `
    return (
      <div>
        <BottomNavigation value={this.state.selectPath} onChange={::this.changeRouter} >
          <Button label="首页" value="/home" icon={<HomeIcon />} />
          <Button label="搜索" value="/search" icon={<FavoriteIcon />} />
          <Button label="关注" value="/like" icon={<SearchIcon />} />
          <Button label="用户" value="/usercenter" icon={<PersonIcon />} />
        </BottomNavigation>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  pathname: state.router.location.pathname,
})

export default connect(mapStateToProps)(Nav)