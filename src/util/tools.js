
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
    let nextSiblings=p.slice(index+1,p.length-1)
    return {prevSiblings,nextSiblings,parentNode:ele.parentNode};
  }else{
    return {prevSiblings:[],nextSiblings:[]}
  }
}
//获取一元素的所有相邻元素的高度
export const getSiblingsH=(ele)=>{
  let {prevSiblings,nextSiblings,parentNode}=getAllSiblings(ele);
  let prevSiblingsH=0,nextSiblingsH=0;
  if(prevSiblings.length>0){
    let lastNode=prevSiblings[prevSiblings.length-1];
    prevSiblingsH=lastNode.offsetHeight+lastNode.offsetTop;
  }
  if(nextSiblings.length>0){
    nextSiblingsH=parentNode.offsetHeight-nextSiblings[nextSiblings.length-1].offsetTop
  }

  return prevSiblingsH+nextSiblingsH;


}