import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../store/actions/home';
import {Link} from 'react-router-dom';
import {Route, Switch } from 'react-router-dom';
import styled,{ThemeProvider} from 'styled-components';
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
    const theme=(props)=>{
      console.log('888',props)
      return {
        fg:'#eee',
        bg:'#333'
      }
    }
    const theme2=(props)=>{
      console.log(props)
      return {
        fg: props.bg,
        bg: props.fg,
      }
    }
    let Button=styled.button`
      color: ${props=>props.theme.fg};
      background: ${props=>props.theme.bg};
    `
    return (
      <div>
        <ThemeProvider theme={theme}>
          <div>
            <h1>Home页面</h1>
            <Button  onClick={()=>add(count+1)}>增加</Button>
            <ThemeProvider theme={theme2}>
              <Button>增加12</Button>
            </ThemeProvider>
          </div>

        </ThemeProvider>
      </div>
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
