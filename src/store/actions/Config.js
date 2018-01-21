import {GET_SCROLL_DIRECTION,SET_SCROLL_POSITION} from '../constants';
//记录滚动条位置
export const getScrollDirection=({position})=>(dispatch,getState)=>{
  let {router:{location:{pathname}},Scroll:{position:prePosition}}=getState();
  let title_show=0,menu_show=0;
  if(pathname=='/' || pathname=='/home'){
    console.log(position , prePosition)
    if(position < prePosition){
      title_show=1;
      menu_show=1;
    }
  }
  dispatch({type: GET_SCROLL_DIRECTION, title_show, menu_show,})
  dispatch({type: SET_SCROLL_POSITION,position})
}