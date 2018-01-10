import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../store/actions/home';
import {Route, Switch ,Link,withRouter} from 'react-router-dom';
import  {BottomNavigation, BottomNavigationAction } from 'material-ui';
import {Home as HomeIcon,Favorite as FavoriteIcon,Search as SearchIcon,Person as PersonIcon} from 'material-ui-icons';
import TabContent from './TabContent';
import {push} from 'react-router-redux';

class Tab extends Component{
  changeRouter(e,path){

    console.log(push(path))
    this.props.dispatch(push(path))
  }
  render(){

    return (
      <div>
        <div style={{color:'red'}}>
          <TabContent />
        </div>
        <BottomNavigation value={3} showLabels={true} onChange={this.changeRouter.bind(this)} >
          <BottomNavigationAction label="首页" value="/home" icon={<HomeIcon />} />
          <BottomNavigationAction label="搜索" value="/search" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="关注" value="/like" icon={<SearchIcon />} />
          <BottomNavigationAction label="用户" value="/config" icon={<PersonIcon />} />
        </BottomNavigation>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  router: state.router,
})

const mapDispatchToProps=(dispatch)=>bindActionCreators({

},dispatch)


export default connect(mapStateToProps)(Tab)
