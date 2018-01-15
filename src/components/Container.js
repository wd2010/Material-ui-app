import React,{Component} from 'react';
import styled,{withTheme} from 'styled-components';

class Container extends Component{
  state={
    nextHeight: 0,
  }
  componentDidMount(){
    let nextSibling=document.getElementById('full').nextSibling;
    if(nextSibling){
      this.setState({
        nextHeight: nextSibling.clientHeight,
      })
    }
  }
  render(){
    let {nextHeight}=this.state;
    let Full=styled.div`
      height: calc(100% - ${nextHeight}px );
      overflow-y: auto;
    `
    return (
      <Full id='full'>
        {this.props.children}
      </Full>
    )
  }

}

export default withTheme(Container)