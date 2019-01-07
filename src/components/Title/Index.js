import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core'
import {Menu as MenuIcon, Search as SearchIcon} from '@material-ui/icons';
import styled from 'styled-components';
import {Switch,Route} from 'react-router-dom';
import SearchTitle from './SearchTitle';
import ReturnTitle from './ReturnTitle';
import UserTitle from './UserTitle';

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