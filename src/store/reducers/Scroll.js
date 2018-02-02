import {SET_SCROLL_DIRECTION, SET_SCROLL_ENDS,SET_SCROLL_CACHE_H,SET_TITLE_DIRECTION,CLEAR_SCROLL,SET_HEADER_H} from '../constants';

const initScrollState = {
  titleDirection:true,//true处于title缓冲区内，不需要隐藏
  direction: 0,//1向上，2向下
  ends: 'top',//'top','','buttom'
  cacheH:0,
  childH:0,
}

export const Scroll = (state = initScrollState, action) => {
  switch (action.type) {
    case SET_SCROLL_DIRECTION:
      return Object.assign({}, state, {direction: action.direction});
    case SET_TITLE_DIRECTION:
      return Object.assign({}, state, {titleDirection: action.titleDirection});
    case SET_SCROLL_ENDS:
      return Object.assign({}, state, {ends: action.ends});
    case SET_SCROLL_CACHE_H:
      return Object.assign({},state,{cacheH:action.cacheH});
    case SET_HEADER_H:
      return Object.assign({},state,{childH: action.childH})
    case CLEAR_SCROLL:
      return initScrollState;
    default:
      return state;
  }
}