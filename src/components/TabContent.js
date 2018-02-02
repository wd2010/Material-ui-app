import React,{Component} from 'react';
import {Route, Switch ,Link} from 'react-router-dom';
import Loadable from 'react-loadable';
const Loading=(props)=>
  <div>Loading...</div>


const Home = Loadable({
  loader: () =>import(/* webpackChunkName: 'Home' */'../containers/Home'),
  loading: Loading,
});


const PostList = Loadable({
  loader: () =>import(/* webpackChunkName: 'Search' */'../containers/PostList'),
  loading: Loading,
});
const UserCenter = Loadable({
  loader: () =>import(/* webpackChunkName: 'UserCenter' */'../containers/User/UserCenter'),
  loading: Loading,
});
const Theme = Loadable({
  loader: () =>import(/* webpackChunkName: 'Theme' */'../containers/Theme'),
  loading: Loading,
});


const TabContent=()=>{
  return (
    <Switch>
      <Route path='/' component={Home} exact={true} />
      <Route path='/home' component={Home} />
      <Route path='/post' component={PostList} />
      <Route path='/user' component={UserCenter} exact={true} />
      <Route path='/theme' component={Theme} />

    </Switch>
  )
}

export default TabContent;