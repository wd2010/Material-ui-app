import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from 'material-ui'
import {ArrowBack as ArrowBackIcon} from 'material-ui-icons';
import {withRouter} from 'react-router-dom';

const ReturnTitle=({history,style})=>{
  return (
    <AppBar style={style}>
      <Toolbar>
        <IconButton onClick={()=>console.log('yyyyy')} color="inherit" aria-label="ArrowBack"><ArrowBackIcon /></IconButton>
        <Typography type="title" color="inherit" >主题</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(ReturnTitle);