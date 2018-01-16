import {put,call,takeEvery,fork,take,cancel,select} from 'redux-saga/effects';
import {ADD,STOP,GET_HOME_INFO,ADD_ASYNC} from '../constants'
import {getCount} from '../reducers/selector';
import {add} from '../actions/home';

export const delay=(ms)=>new Promise(resolve=>{
  setTimeout(resolve,ms);
})

export function* incrementAsync() {
  yield call(delay,2000);
  let count=yield select(getCount);
  yield put(add(count))
}

export function* watchIncrementAsync() {
  while(true){
    let task=yield take(ADD_ASYNC)
    yield call(incrementAsync)
    yield take(STOP);
    yield cancel(task)
  }



}