import React,{Component} from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core'
import {ArrowBack as ArrowBackIcon} from '@material-ui/icons';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
let ReturnBar=styled(AppBar)`
   &&{
    background: ${props=>props.theme.palette.background.title};
    color: ${props=>props.theme.palette.color.title}
   } 
  `

class ReturnTitle extends Component{
  goBack(e){
    let {location:{state},history}=this.props;
    history.replace(`${state?state.from:'/'}`)
  }

  render(){
    let {style,location:{state}}=this.props;
    return (
      <ReturnBar style={style}>
        <Toolbar>
          <IconButton onClick={::this.goBack} color="inherit" aria-label="ArrowBack"><ArrowBackIcon /></IconButton>
          <Typography type="title" color="inherit" >{state.title?state.title:'返回'}</Typography>
        </Toolbar>
      </ReturnBar>
    )
  }
}

export default withRouter(ReturnTitle);