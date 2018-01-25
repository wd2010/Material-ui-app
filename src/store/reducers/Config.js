import {SWITCH_THEME} from '../constants';
const initConfig={
  mode:1,//0夜间，1白天
}
export const Config=(state=initConfig,action)=>{
  switch(action.type){
    case SWITCH_THEME:
      return Object.assign({},state,{mode: action.mode});
    default:
      return state;
  }
}