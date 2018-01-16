import {get,post} from '../actions/fetchApi';
import {put,call,takeEvery,take} from 'redux-saga/effects';
const delay=(ms)=>new Promise(resolve=>setTimeout(resolve,ms))

const getDetail=async (name)=>{
  await delay(1000);
  return {name,age:22}
}

function* fetchPost() {
  try{
    let data=yield call(getDetail,'wd2010');
    yield put({type:'GET_POST_SUCCESS',data})
  }catch(error){
    yield put({type:'GET_ERROR',error})
  }
}

export function* getPosts() {
  yield take('GET_POSTS')
  console.log('take getPosts')

}



