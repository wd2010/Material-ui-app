import {SET_SCROLL_ENDS,SET_SCROLL_CACHE_H,SET_SCROLL_DIRECTION,SET_TITLE_DIRECTION,CLEAR_SCROLL,SET_HEADER_H} from '../constants';

export const getScrollDetail=({currentPosition,nextPosition})=>(dispatch,getState)=>{
  let {Scroll:{direction:preDirection}}=getState();
  let nextDirection=nextPosition-currentPosition>0?2:1;

  if(nextDirection!==preDirection ){
    dispatch({
      type: SET_SCROLL_DIRECTION,
      direction: nextDirection,
    })
  }
}
export const setHeaderH=({childH})=>({
  type: SET_HEADER_H,
  childH
})

export const setTitleDirection=({titleDirection})=>({
  type: SET_TITLE_DIRECTION,
  titleDirection,
})

export const setScrollEnds=({ends})=>({
  type: SET_SCROLL_ENDS,
  ends,
})

export const setScrollCacheH=({cacheH})=>({
  type: SET_SCROLL_CACHE_H,
  cacheH,
})

export const clearScroll=()=>({type: CLEAR_SCROLL})