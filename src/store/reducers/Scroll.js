import {SET_SCROLL_DIRECTION, SET_SCROLL_ENDS,SET_SCROLL_CACHE_H,SET_TITLE_DIRECTION} from '../constants';

const initScrollState = {
  titleDirection:true,//1向上，2向下
  direction: 0,//1向上，2向下
  ends: 'top',//'top','','buttom'
  cacheH:0,
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
      return Object.assign({},state,{cacheH:action.cacheH})
    default:
      return state;
  }
}