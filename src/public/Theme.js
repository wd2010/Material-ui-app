import React,{Component} from 'react';
import {createMuiTheme } from 'material-ui/styles';
import {grey} from 'material-ui/colors';

export const theme=createMuiTheme({
  palette: {
    type: 'light',
    primary: {...grey,"600":grey[900]},
  },

  typography: {
    htmlFontSize: 18,
  },
  overrides: {
    MuiPaper:{
      root:{}
    }
  },
});


export const styledTheme={
  palette: {
    type: 'light',
    primary: {...grey,"600":grey[900]},
  },

  typography: {
    htmlFontSize: 18,
  },
  overrides: {
    MuiPaper:{
      root:{}
    }
  },
}