import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../store/actions/home';
import {Link} from 'react-router-dom';
import {Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import {Button } from 'material-ui';
import {Add as AddIcon} from 'material-ui-icons'

class Home extends Component{
  state={
    hasError:false,
  }
  componentDidMount(){
    this.props.getHomeInfo()
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });

    // 在这里可以做异常的上报
    console.log('发送错误',error,info)
  }
  render(){
    let {add,count,homeInfo:{name,age}}=this.props;
    let HomeContainer=styled.div`
      position: relative;
    `
    let AddBtn=styled(Button)`
      &&{
        position: fixed;
        bottom: 70px;
        right: 20px;
        display: block;
      }
    `
    return (
      <HomeContainer>
        <AddBtn fab mini color="primary" aria-label="add">
          <AddIcon />
        </AddBtn>
      </HomeContainer>
    )
  }
}

const mapStateToProps=(state)=>({
  count: state.counter.count,
  homeInfo: state.homeInfo,
})

const mapDispatchToProps=(dispatch)=>bindActionCreators({
  add: actions.add,
  getHomeInfo: actions.getHomeInfo,
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Home)
