import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from 'material-ui'
import {Menu as MenuIcon, Search as SearchIcon} from 'material-ui-icons';
import styled from 'styled-components';
let SearchBar=styled(AppBar)`
    position: fixed;
  `
let SearchBtn=styled(Button)`
    &&{
      width: 100%;
      background:${props=>props.theme.palette.primary['700']};
      span:first-child{
        justify-content: left;
      }
      &:hover{
        background:${props=>props.theme.palette.primary['700']};
      }
    }
  `
const Title=({style})=>{

  return (
    <SearchBar style={style}>
      <Toolbar>
        <SearchBtn fullwidth='true' color="contrast"><SearchIcon /></SearchBtn>
      </Toolbar>
    </SearchBar>
  )
}

export default Title;