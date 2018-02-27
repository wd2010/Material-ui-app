import React,{Component} from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from 'material-ui'
import {ArrowBack as ArrowBackIcon} from 'material-ui-icons';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
let ReturnBar=styled(AppBar).attrs({
  background: props=> props.opacity < 1?'none': props.theme.palette.background.title,
})`
   &&{
    background: ${props=>props.background};
    color: ${props=>props.theme.palette.color.title};
   } 
  `
class ReturnTitle extends Component{
  goBack(){
    let {location:{state},history}=this.props;
    history.replace(`${state?state.from:'/'}`)
  }

  render(){
    let {style,location:{state},opacity}=this.props;
    return (
      <ReturnBar style={style} opacity={opacity!==undefined?opacity:1} elevation={0}>
        <Toolbar>
          <IconButton onClick={::this.goBack} color="inherit" aria-label="ArrowBack"><ArrowBackIcon /></IconButton>
          <Typography style={{opacity}} type="title" color="inherit" >{state && state.title?state.title:'返回'}</Typography>
        </Toolbar>
      </ReturnBar>
    )
  }
}

export default withRouter(ReturnTitle);