import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from 'material-ui'
import {Menu as MenuIcon, Search as SearchIcon} from 'material-ui-icons';
import styled from 'styled-components';

const Title=({show=true})=>{
  let SearchBar=styled(AppBar)`
    &&{
      top: ${show?'0':'-56px'};
      transition: top 2s;
    }
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
  return (
    <SearchBar>
      <Toolbar>
        <SearchBtn fullwidth='true' color="contrast"><SearchIcon /></SearchBtn>
      </Toolbar>
    </SearchBar>
  )
}

export default Title;