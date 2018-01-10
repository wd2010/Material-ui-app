import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  {BottomNavigation, BottomNavigationAction } from 'material-ui';
import {Home as HomeIcon,Favorite as FavoriteIcon,Search as SearchIcon,Person as PersonIcon} from 'material-ui-icons';
import {push} from 'react-router-redux';

class Tab extends Component{
  state={
    selectPath:'/'
  }
  changeRouter(e,path){
    this.setState({selectPath:path})
    this.props.dispatch(push(path))
  }
  render(){
    const {pathname}=this.props;
    let active=pathname===this.state.selectPath;
    return (
      <div>
        <BottomNavigation value={3} showLabels={true} onChange={::this.changeRouter} >
          <BottomNavigationAction label="首页" value="/home" icon={<HomeIcon />} />
          <BottomNavigationAction label="搜索" value="/search" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="关注" value="/like" icon={<SearchIcon />} />
          <BottomNavigationAction label="用户" value="/usercenter" icon={<PersonIcon />} />
        </BottomNavigation>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  pathname: state.router.location.pathname,
})

export default connect(mapStateToProps)(Tab)