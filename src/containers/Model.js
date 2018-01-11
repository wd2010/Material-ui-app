import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {withTheme} from 'styled-components';

import styled from 'styled-components'
const Button=styled.button`
  color:red;
  background: #eee;
`

const Model=(props)=>{
  console.log(props)
  return <div><Button>223y</Button></div>
}

const mapStateToProps=(state)=>({})
export default connect(mapStateToProps)(withRouter(withTheme(Model)));