import React,{Component} from 'react';
import {createMuiTheme } from 'material-ui';
import {purple,pink} from 'material-ui/colors';

//mode//0夜间，1白天

export const styledTheme=({mode,themeColor})=>({
    palette: {
      type: mode?'light':'dark',
      primary: pink,
      background:{
        contentFrame:mode?'#fff':'#333',
        page:mode?'#eee':'#111',

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
)



