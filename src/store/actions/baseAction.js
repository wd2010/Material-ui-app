import {GET_SCROLL_POSITION} from '../constants';
//记录滚动条位置
export const getScrollPosition=({position})=>({
  type: GET_SCROLL_POSITION,
  position,
})