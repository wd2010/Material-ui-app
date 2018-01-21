import {GET_SCROLL_DIRECTION,SET_SCROLL_POSITION} from '../constants';

const initScrollState={
  position:0,
  title_show:1,
  menu_show:1,
}

export const Scroll=(state=initScrollState,action)=>{
  switch(action.type){
    case SET_SCROLL_POSITION:
      return Object.assign({},state,{position:action.position});
    case GET_SCROLL_DIRECTION:
      return Object.assign({},state,{title_show:action.title_show,menu_show:action.menu_show});
    default:
      return state;
  }
}