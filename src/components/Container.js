import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styled, {withTheme} from 'styled-components';
import {getChildrenH} from '../util/tools';
import * as actions from '../store/actions/Scroll';

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      childrenH: 0,
      offsetH: 0,
      hide:true,
      childAnimation:{
        transition: 'top 0.4s ease,bottom 0.4s ease',
      },
      Container:styled.div``,
    }
  }

  componentDidMount() {
    let {type,setScrollCacheHAct}=this.props;
    let ele = document.getElementById('container');
    let {childrenH,offsetH}= getChildrenH(ele,type);
    console.log(type,childrenH,offsetH);
    this.setState({
      childrenH,
      offsetH,
      Container:styled.div`
        height: ${childrenH+10}px;
      `
    });
    if(type==='title'){
      setScrollCacheHAct({cacheH:offsetH?offsetH:childrenH})
    }
  }

  render() {
    let {childrenH,offsetH,childAnimation,Container} = this.state;
    let {type,children,hide}=this.props;
    let hideH=hide?`-${offsetH?offsetH:childrenH}px`:0;
    let childStyle=Object.assign({},childAnimation,{'top': type==='title'?hideH:'','buttom': type==='menu'?hideH:''})
    return (
      <Container id='container'>
        {React.cloneElement(children,
          {
            ...children.props,
            style: childStyle,
          }
        )}
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  setScrollCacheHAct: actions.setScrollCacheH,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Container))