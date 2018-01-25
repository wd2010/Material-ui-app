import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import {Scroll} from './Scroll';
import {Config} from './Config';

export default combineReducers({
  router:routerReducer,
  Scroll,
  Config,
})