import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../store/actions/home';
import {Link } from 'react-router-dom';

class User extends Component{

  render(){
    let {count}=this.props;
    return (
      <div>
        <h1>User页面</h1>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  count: state.counter.count,
})

const mapDispatchToProps=(dispatch)=>bindActionCreators({
  add: actions.add,
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(User)
