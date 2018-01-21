
export const paramData=(params)=>{
  if(params==null)return '';
  let list=[];
  for (let [key,value] of Object.entries(params)){
    list.push(`${key}=${value}`);
  }
  return list.join('&')
}

//获取一元素的所有相邻元素
const getAllSiblings=(ele)=>{
  let childrenNode=ele.parentNode.childNodes;
  let p=Array.from(childrenNode);
  let index=p.indexOf(ele);
  if(~index){
    let prevSiblings=p.slice(0,index);
    let nextSiblings=p.slice(index+1,p.length)
    return {prevSiblings,nextSiblings};
  }else{
    return {prevSiblings:[],nextSiblings:[]}
  }
}
//获取一元素的所有相邻元素的高度
export const getSiblingsH=(ele)=>{
  let {prevSiblings,nextSiblings}=getAllSiblings(ele);
  let prevSiblingsH=0,nextSiblingsH=0;
  if(prevSiblings.length>0){
    let lastNode=prevSiblings[prevSiblings.length-1];
    prevSiblingsH=lastNode.offsetHeight+lastNode.offsetTop;
  }
  if(nextSiblings.length>0){
    nextSiblingsH=window.innerHeight-nextSiblings[nextSiblings.length-1].offsetTop
  }

  return {prevSiblingsH,nextSiblingsH};
}

//防抖动
export const debounce=({ms,func,interval})=>{
  let timer=null;
  let previous=null;
  return function (e) {
    let now=+new Date;
    if(!previous)previous=now;
    if(now-previous > interval){
      clearTimeout(timer);
      func(e);
      previous=now;
    }else{
      clearTimeout(timer)
      timer=setTimeout(func.bind(null,e),ms)
    }
  }
}