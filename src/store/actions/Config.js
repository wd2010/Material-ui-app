import {SWITCH_THEME,CHANGE_THEME} from '../constants';

export const SwitchTheme=({value})=>({
  type: SWITCH_THEME,
  mode: value? 0: 1,
})

export const changeTheme=(themeColor)=>({
  type: CHANGE_THEME,
  themeColor,
})