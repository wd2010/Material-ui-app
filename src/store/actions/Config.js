import {SWITCH_THEME} from '../constants';

export const SwitchTheme=({value})=>({
  type: SWITCH_THEME,
  mode: value? 0: 1,
})