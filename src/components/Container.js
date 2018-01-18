import React,{Component} from 'react';
import styled,{withTheme} from 'styled-components';
import {getSiblingsH} from '../util/tools';

class Container extends Component{
  state={
    siblingsH: 0,
  }
  componentDidMount(){
    let ele=document.getElementById('full');
    let siblingsH=getSiblingsH(ele)
    this.setState({siblingsH})
  }
  render(){
    let {siblingsH}=this.state;
    let Full=styled.div`
      height: calc(100% - ${siblingsH}px );
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