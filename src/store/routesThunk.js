import React from 'react';
import {getHomeInfo} from './actions/home';

const Thunk=action=>store=>store.dispatch(action())

const routesThunk=[{
  path: '/user',
  thunk: ()=>{console.log('服务器端请求user页面数据')},
},{
  path:'/article',
  thunk:()=>{},
},{
  path: '/',
  thunk: Thunk(getHomeInfo),
  routes:[
    {
      path:'/home',
      thunk:()=>console.log('服务器端请求home页面数据'),
    },{
      path:'/search',
      thunk:()=>console.log('服务器端请求search页面数据'),
    },{
      path:'/usercenter',
      thunk:()=>console.log('服务器端请求userCenter页面数据'),
    }
  ]
}];

export default routesThunk;




