import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styled,{withTheme} from 'styled-components';
import {getSiblingsH} from '../util/tools';
import * as actions from '../store/actions/baseAction';

class Container extends Component{
  state={
    siblingsH: 0,
  }
  componentDidMount(){
    let ele=document.getElementById('full');
    let siblingsH=getSiblingsH(ele)
    this.setState({siblingsH})
  }

  handleScroll(e){
    let scrollPostion=e.target.scrollTop;//滚动条位置
    this.props.getScrollPositionAct({position:scrollPostion})
  }

  render(){
    let {siblingsH}=this.state;
    let Full=styled.div`
      height: calc(100% - ${siblingsH}px );
      overflow-y: auto;
    `
    return (
      <Full id='full' onScroll={::this.handleScroll}>
        {this.props.children}
      </Full>
    )
  }
}

const mapStateToProps=(state)=>({

})
const mapDispatchToProps=(dispatch)=>bindActionCreators({
  getScrollPositionAct: actions.getScrollPosition,
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(withTheme(Container))