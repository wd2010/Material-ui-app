import {GET_SCROLL_DIRECTION,SET_SCROLL_POSITION} from '../constants';

const initScrollState={
  position:0,
  direction: 0,//1向上，2向下
  ends:'top',//'top','','buttom'
}

export const Scroll=(state=initScrollState,action)=>{
  switch(action.type){
    case SET_SCROLL_POSITION:
      return Object.assign({},state,{position:action.position,ends: action.ends});
    case GET_SCROLL_DIRECTION:
      return Object.assign({},state,{direction: action.direction, ends: action.ends});
    default:
      return state;
  }
}