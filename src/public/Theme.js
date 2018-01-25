import React,{Component} from 'react';
import {createMuiTheme } from 'material-ui/styles';
import {purple,pink} from 'material-ui/colors';

export const styledTheme={
  palette: {
    type: 'light',
    primary: {...pink},
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


