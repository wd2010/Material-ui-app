import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core'
import {Search as SearchIcon} from '@material-ui/icons';
import styled from 'styled-components';
import {connect} from 'react-redux'
let SearchBar=styled(AppBar)`
   &&{
    background: ${props=>props.theme.palette.background.title};
   } 
  `
let SearchBtn=styled(Button).attrs({
  color: props=>props.mode?'primary':'default'
})`
  &&{
    width: 100%;
    background:${props=>props.mode?props.theme.palette.primary[700]:props.theme.palette.background.page };
    span:first-child{
      justify-content: left;
    }
    &:hover{
      background:${props=>props.mode?props.theme.palette.primary[700]:props.theme.palette.background.page };
    }
  }
`
let SearchSize=styled.span`
  font-size: 16px;
  margin-left: 10px;
`

const SearchTitle=({style,mode})=>{
  return (
    <SearchBar style={style}>
      <Toolbar>
        <SearchBtn fullwidth='true' mode={mode} ><SearchIcon /><SearchSize>搜索</SearchSize></SearchBtn>
      </Toolbar>
    </SearchBar>
  )
}

const mapStateToProps=(state)=>({
  mode:state.Config.mode,
})
export default connect(mapStateToProps)(SearchTitle) ;