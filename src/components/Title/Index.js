import React from 'react';
import {Switch,Route} from 'react-router-dom';
import SearchTitle from './SearchTitle';
import ReturnTitle from './ReturnTitle';
const Title=({style})=>{

  return(
    <Switch>
      <Route path='/' render={()=><SearchTitle style={style} />} exact={true} />
      <Route path='/home' render={()=><SearchTitle style={style} />} />
      <Route path='/post' render={()=><SearchTitle style={style} />} />
      <Route path='/user' render={()=><SearchTitle style={style} />} exact={true} />
      <Route path='/theme' render={()=><ReturnTitle style={style} />} />
    </Switch>
  )
}

export default Title;