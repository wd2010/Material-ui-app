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
    this.handleScroll = throttle(this.handleScroll.bind(this), 100, {trailing: true})
  }

  handleScroll() {
    let {currentPosition}=this.state;
    let {ends,cacheH,direction,titleDirection} =this.props;
    let nextPosition = document.documentElement.scrollTop;
    let documentTotalH=document.documentElement.scrollHeight;
    let clientH=document.documentElement.clientHeight;

    if(nextPosition<cacheH && currentPosition<cacheH ){
      if(titleDirection!==true){
        this.props.setTitleDirectionAct({titleDirection:true})
      }
    }else{
      if(titleDirection!==false){
        this.props.setTitleDirectionAct({titleDirection:false})
      }
    }
    if(Math.abs(nextPosition-currentPosition) >5){
      this.props.getScrollDetailAct({currentPosition,nextPosition})
    }
    if(nextPosition===0 && ends!=='top' ){
      this.props.setScrollEndsAct({ends:'top'})
    }else if(documentTotalH-(nextPosition+clientH)<10 && ends!=='buttom'){
      this.props.setScrollEndsAct({ends:'buttom'})
    }else if(nextPosition>0 && ends!==''){
      this.props.setScrollEndsAct({ends:''})
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
  cacheH: state.Scroll.cacheH,
  direction: state.Scroll.direction,
  titleDirection: state.Scroll.titleDirection,
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getScrollDetailAct: actions.getScrollDetail,
  setScrollEndsAct : actions.setScrollEnds,
  setScrollDirectionAct : actions.setScrollDirection,
  setTitleDirectionAct : actions.setTitleDirection,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Scroll)
