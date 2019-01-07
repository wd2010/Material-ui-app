import React,{Component} from 'react';
import {createMuiTheme } from '@material-ui/core';
import {purple,pink} from '@material-ui/core/colors';
import {COLORS} from '../store/constants';

let colors=require('@material-ui/core/colors')
//mode//0夜间，1白天

export const styledTheme=({mode,themeColor})=>{
  let theme=colors[themeColor]
  return({
      palette: {
        type: mode?'light':'dark',
        primary:mode?theme:{...theme,500:theme[200]},
        background:{
          contentFrame:mode?'#fff':'#333',
          page:mode?'#eee':'#111',
          title: mode?theme:'#333',
          titleBtn: mode? theme :'#111',
        },
        color: {
          title: mode? '': 'white',
        }
      },

      typography: {
        useNextVariants: true,
        htmlFontSize: 18,
      },
      overrides: {
        MuiPaper:{
          root:{}
        }
      },
    }
  )
}




