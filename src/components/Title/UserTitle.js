import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core'
import {Menu as MenuIcon, MoreVert as MoreVertIcon} from '@material-ui/icons';
import styled from 'styled-components';

const UserTitle=({style})=>{
  return (
    <AppBar style={style}>
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu"><MenuIcon /></IconButton>
        <Typography style={{flex:1}} type="title" color="inherit" >Title</Typography>
        <IconButton color="inherit" aria-label="MoreVert"><MoreVertIcon /></IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default UserTitle;