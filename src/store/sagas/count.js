import {put,call,takeEvery,fork,take,cancel,select} from 'redux-saga/effects';
import {ADD,STOP,GET_HOME_INFO,ADD_ASYNC} from '../constants'
import {getCount} from '../reducers/selector';
import {add} from '../actions/home';

export const delay=(ms)=>new Promise(resolve=>{
  setTimeout(resolve,ms);
})

export function* incrementAsync() {
  yield call(delay,1000);
  let count=yield select(getCount);
  yield put(add(count))
}

export function* watchIncrementAsync() {
  while(true){
    yield take(ADD_ASYNC)
    let task=yield fork(incrementAsync);
    console.log(task.isRunning())

    if(task){
      yield take(STOP)
      console.log(task.isCancelled()  )
      yield cancel(task)
    }else{
      return
    }



  }
}