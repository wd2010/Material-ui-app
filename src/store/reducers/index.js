import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import {Scroll} from './Scroll';

export default combineReducers({
  router:routerReducer,
  Scroll
})