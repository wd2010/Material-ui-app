import {ADD,GET_HOME_INFO} from '../constants'
export const add=(count)=>({type: ADD, count,})

export const getHomeInfo=()=>async(dispatch,getState)=>{
  let {name,age}=getState().homeInfo;
  if(name || age)return
  await new Promise(resolve=>{
    let homeInfo={name:'wd2010',age:'28'}
    console.log('请求Tab数据')
    setTimeout(()=>resolve(homeInfo),0)
  }).then(homeInfo=>{
    dispatch({type:GET_HOME_INFO,data:homeInfo})
  })
}
