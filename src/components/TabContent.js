import React,{Component} from 'react';
import {Route, Switch ,Link} from 'react-router-dom';
import Loadable from 'react-loadable';
const Loading=(props)=>
  <div>Loading...</div>


const Home = Loadable({
  loader: () =>import(/* webpackChunkName: 'Home' */'../containers/Home'),
  loading: Loading,
});
const Search = Loadable({
  loader: () =>import(/* webpackChunkName: 'Search' */'../containers/Search'),
  loading: Loading,
});
const UserCenter = Loadable({
  loader: () =>import(/* webpackChunkName: 'UserCenter' */'../containers/UserCenter'),
  loading: Loading,
});



const TabContent=()=>{
  return (
    <div>
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/home' component={Home} />
        <Route path='/search' component={Search} />
        <Route path='/usercenter' component={UserCenter} />
      </Switch>
    </div>
  )
}

export default TabContent;