import {ADD,STOP,ADD_ASYNC,GET_HOME_INFO} from '../constants'
export const add=(value)=>({
  type: ADD,
  count:value+1
})

export const stop=()=>({
  type: STOP
})

export const getHomeInfo=()=>({
  type: GET_HOME_INFO,
})


export const addAsync=()=>({
  type: ADD_ASYNC
})