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
      childH: 0,
    }
  }

  componentDidMount() {
    let ele = document.getElementById('container');
    let childH= getChildrenH(ele);
    this.setState({childH});
  }


  render() {
    let {childH} = this.state;
    let Container = styled.div`
      height: ${childH+10}px;
    `
    return (
      <Container id='container'>
        {this.props.children}
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getScrollDirectionAct: actions.getScrollDirection,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Container))