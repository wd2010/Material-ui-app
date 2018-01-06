import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../store/actions/home';
import {Route, Switch ,Link} from 'react-router-dom';
import  {BottomNavigation, BottomNavigationButton } from 'material-ui';
import {Home as HomeIcon,Favorite as FavoriteIcon,Search as SearchIcon,Person as PersonIcon} from 'material-ui-icons';
import TabContent from './TabContent'
class Tab extends Component{
  render(){
    return (
      <div>
        <div style={{color:'red'}}>
          <TabContent />
        </div>
        <BottomNavigation value={3} onChange={()=>console.log('yyy')} >
          <BottomNavigationButton label="首页" value="/home" icon={<HomeIcon />} />
          <BottomNavigationButton label="搜索" value="/search" icon={<FavoriteIcon />} />
          <BottomNavigationButton label="关注" value="/like" icon={<SearchIcon />} />
          <BottomNavigationButton label="用户" value="/config" icon={<PersonIcon />} />
        </BottomNavigation>
      </div>
    )
  }
}

export default Tab;
