import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from 'material-ui'
import {Menu as MenuIcon, Search as SearchIcon} from 'material-ui-icons';
import styled from 'styled-components';
import SearchTitle from './SearchTitle';
import ReturnTitle from './ReturnTitle';
import UserTitle from './UserTitle';

const Title=({type,style})=>{
  switch(type){
    case 'search':
    case 'usercenter':
      return <SearchTitle style={style} />
      break;
    case 'return':
      return <ReturnTitle style={style} />
      break;

  }
}

export default Title;