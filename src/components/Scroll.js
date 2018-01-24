import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {throttle} from '../util/tools';
import * as actions from '../store/actions/Scroll';

class Scroll extends Component {
  constructor(props) {
    super(props)
    this.state={
      currentPosition:null,
    }
    this.handleScroll = throttle(this.handleScroll.bind(this), 200, {trailing: true})
  }

  componentWillReceiveProps(nextProps){
    if(this.props.pathname!==nextProps.pathname){
      this.props.clearScrollAct()
    }
  }

  handleScroll() {
    let {currentPosition}=this.state;
    let {ends,cacheH,titleDirection} =this.props;
    let nextPosition = document.documentElement.scrollTop;
    let documentTotalH=document.documentElement.scrollHeight;
    let clientH=document.documentElement.clientHeight;

    if(currentPosition!=null){
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
    return null
  }
}

const mapStateToProps = (state) => ({
  ends: state.Scroll.ends,
  cacheH: state.Scroll.cacheH,
  direction: state.Scroll.direction,
  titleDirection: state.Scroll.titleDirection,
  pathname: state.router.location.pathname,
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getScrollDetailAct: actions.getScrollDetail,
  setScrollEndsAct : actions.setScrollEnds,
  setScrollDirectionAct : actions.setScrollDirection,
  setTitleDirectionAct : actions.setTitleDirection,
  clearScrollAct: actions.clearScroll,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Scroll)
