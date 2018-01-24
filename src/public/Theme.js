import React,{Component} from 'react';
import {createMuiTheme } from 'material-ui/styles';
import {purple,green} from 'material-ui/colors';

export const styledTheme={
  palette: {
    type: 'light',
    primary: {...green},
    background:{
      contentFrame:'#fff',
      page:'#eee',

    },
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

export const theme=createMuiTheme(styledTheme);


