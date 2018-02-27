import React,{Component} from 'react';
import {createMuiTheme } from 'material-ui';
import {purple,pink} from 'material-ui/colors';
import {COLORS} from '../store/constants';

let colors=require('material-ui/colors')
//mode//0夜间，1白天

export const styledTheme=({mode,themeColor})=>{
  let theme=colors[themeColor]
  return({
      palette: {
        type: mode?'light':'dark',
        primary:mode?theme:{...theme,500:theme[200]},
        background:{
          contentFrame:mode?'#fff':'#424242',
          page:mode?'#eee':'#111',
          title: mode?theme[500]:'#424242',
          titleBtn: mode? theme[500] :'#111',
        },
        color: {
          title: mode? '': 'white',
        }
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
}




