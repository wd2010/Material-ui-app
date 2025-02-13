import {SWITCH_THEME,CHANGE_THEME} from '../constants';
const initConfig={
  mode:0,//0夜间，1白天
  themeColor: 'red' ,
}
export const Config=(state=initConfig,action)=>{
  switch(action.type){
    case SWITCH_THEME:
      return Object.assign({},state,{mode: action.mode});
    case CHANGE_THEME:
      return Object.assign({},state,{themeColor:action.themeColor,mode: action.mode})
    default:
      return state;
  }
}