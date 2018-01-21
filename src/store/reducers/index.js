import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import {Scroll} from './Config';

export default combineReducers({
  router:routerReducer,
  Scroll
})