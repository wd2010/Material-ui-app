
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
//获取一元素子元素的高度
export const getChildrenH=(ele)=>{
  let childDom=ele.firstChild;
  let childH=childDom.offsetHeight+childDom.offsetTop;
  return childH
}
//防抖动
/*export const debounce=({ms,func,interval})=>{
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
}*/

/*我们网站经常会有这样的需求，就是滚动浏览器滚动条的时候，更新页面上的某些布局内容或者去调用后台的某接口查询内容。
同样的，如果不对函数调用的频率加以限制的话，那么可能我们滚动一次滚动条就会产生N次的调用了。但是这次的情况跟上
面的有所不同，我们不是要在每完成等待某个时间后去执行某函数，而是要每间隔某个时间去执行某函数，避免函数的过多执行，
这个方式就叫函数节流。*/
export const throttle = function(func, wait, options) {
  /* options的默认值
   *  表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
   *  options.leading = true;
   * 表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
   *  options.trailing = true;
   * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
   */
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : (+new Date);
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {

    var now = (+new Date);
    if (!previous && options.leading === false) previous = now;
    // 计算剩余时间
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    // 当到达wait指定的时间间隔，则调用func函数
    // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
    if (remaining <= 0 || remaining > wait) {
      // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      // options.trailing=true时，延时执行func函数
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};


//函数防抖就是让某个函数在上一次执行后，满足等待某个时间内不再触发此函数后再执行，而在这个等待时间内再次触发此函数，等待时间会重新计算。
export const debounce = function(func, wait, immediate) {
  // immediate默认为false
  var timeout, args, context, timestamp, result;

  var later = function() {
    // 当wait指定的时间间隔期间多次调用_.debounce返回的函数，则会不断更新timestamp的值，导致last < wait && last >= 0一直为true，从而不断启动新的计时器延时执行func
    var last = (+new Date) - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function() {
    context = this;
    args = arguments;
    timestamp = (+new Date);
    // 第一次调用该方法时，且immediate为true，则调用func函数
    var callNow = immediate && !timeout;
    // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};