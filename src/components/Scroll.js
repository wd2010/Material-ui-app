import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {throttle} from '../util/tools';
import * as actions from '../store/actions/Scroll';

class Scroll extends Component {
  constructor(props) {
    super(props)
    this.state={
      currentPosition:0,
    }
    this.handleScroll = throttle(this.handleScroll.bind(this), 400, {trailing: true})
  }

  handleScroll() {
    let {currentPosition}=this.state;
    let {ends} =this.props;
    let nextPosition = document.documentElement.scrollTop;
    if(nextPosition>300 && Math.abs(nextPosition-currentPosition) >5){
      this.props.getScrollDetailAct({currentPosition,nextPosition})
    }
    if(nextPosition===0  ){
      this.props.setScrollEndsAct({ends:'top'})
    }
    this.setState({currentPosition:nextPosition})
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return false
  }
}

const mapStateToProps = (state) => ({
  ends: state.Scroll.ends,
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getScrollDetailAct: actions.getScrollDetail,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Scroll)
