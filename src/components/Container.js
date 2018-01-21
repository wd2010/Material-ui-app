import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styled,{withTheme} from 'styled-components';
import {getSiblingsH,debounce} from '../util/tools';
import * as actions from '../store/actions/Config';

class Container extends Component{
  constructor(props){
    super(props)
    this.state={
      prevSiblingsH:0,
      nextSiblingsH:0,
    }
    this.handleScroll=this.handleScroll.bind(this)
  }

  componentDidMount(){
    let ele=document.getElementById('full');
    let {prevSiblingsH,nextSiblingsH}=getSiblingsH(ele);
    this.setState({prevSiblingsH,nextSiblingsH});
    //window.addEventListener('scroll',this.handleScroll,false)
  }

  //componentWillUnmount(){
  //  window.removeEventListener('scroll',this.handleScroll)
  //}

  handleScroll(e){
    e.stopPropagation()
    console.log(this.props)
    let scrollPostion=e.target.scrollTop;//滚动条位置
    debugger
    this.props.getScrollDirectionAct({position:scrollPostion})
  }

  render(){
    let {prevSiblingsH,nextSiblingsH}=this.state;
    let Container=styled.div`
      padding-top: ${prevSiblingsH}px;
      padding-bottom: ${nextSiblingsH}px;
      height: 800px;
      overflow-y: scroll;
    `
    return (
      <Container id='full' onScroll={()=>console.log('yyy')} >
        {this.props.children}
      </Container>
    )
  }
}

const mapStateToProps=(state)=>({})
const mapDispatchToProps=(dispatch)=>bindActionCreators({
  getScrollDirectionAct: actions.getScrollDirection,
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(withTheme(Container))