import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../store/actions/home';
import {Route, Switch ,Link} from 'react-router-dom';
import styled from 'styled-components';
import {Button } from 'material-ui';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay } from 'react-swipeable-views-utils';
let AutoPlaySwipeableViews=autoPlay(SwipeableViews);

class Home extends Component{
  state={
    hasError:false,
  }


  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // 在这里可以做异常的上报
    console.log('发送错误',error,info)
  }
  render(){

    let HomeContainer=styled.div`
      position: relative;
    `
    let Img=styled.img`
      width: 100%;
      max-height: 200px;
    `
    return (
      <HomeContainer>
        <AutoPlaySwipeableViews>
          <Img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg' />
          <Img src='http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d453aab8b48166d224e4adef5.jpg' />
          <Img src='http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8765f664b38fa828ba61e4624.jpg' />
        </AutoPlaySwipeableViews>
        <AutoPlaySwipeableViews>
          <Img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg' />
          <Img src='http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d453aab8b48166d224e4adef5.jpg' />
          <Img src='http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8765f664b38fa828ba61e4624.jpg' />
        </AutoPlaySwipeableViews>
        <AutoPlaySwipeableViews>
          <Img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg' />
          <Img src='http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d453aab8b48166d224e4adef5.jpg' />
          <Img src='http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8765f664b38fa828ba61e4624.jpg' />
        </AutoPlaySwipeableViews>
        <AutoPlaySwipeableViews>
          <Img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg' />
          <Img src='http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d453aab8b48166d224e4adef5.jpg' />
          <Img src='http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8765f664b38fa828ba61e4624.jpg' />
        </AutoPlaySwipeableViews>
        <AutoPlaySwipeableViews>
          <Img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg' />
          <Img src='http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d453aab8b48166d224e4adef5.jpg' />
          <Img src='http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8765f664b38fa828ba61e4624.jpg' />
        </AutoPlaySwipeableViews>
        <AutoPlaySwipeableViews>
          <Img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg' />
          <Img src='http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d453aab8b48166d224e4adef5.jpg' />
          <Img src='http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8765f664b38fa828ba61e4624.jpg' />
        </AutoPlaySwipeableViews>
        <AutoPlaySwipeableViews>
          <Img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg' />
          <Img src='http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d453aab8b48166d224e4adef5.jpg' />
          <Img src='http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8765f664b38fa828ba61e4624.jpg' />
        </AutoPlaySwipeableViews>
        <AutoPlaySwipeableViews>
          <Img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg' />
          <Img src='http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d453aab8b48166d224e4adef5.jpg' />
          <Img src='http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8765f664b38fa828ba61e4624.jpg' />
        </AutoPlaySwipeableViews>
        <AutoPlaySwipeableViews>
          <Img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg' />
          <Img src='http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d453aab8b48166d224e4adef5.jpg' />
          <Img src='http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8765f664b38fa828ba61e4624.jpg' />
        </AutoPlaySwipeableViews>
        <AutoPlaySwipeableViews>
          <Img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg' />
          <Img src='http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d453aab8b48166d224e4adef5.jpg' />
          <Img src='http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8765f664b38fa828ba61e4624.jpg' />
        </AutoPlaySwipeableViews>
        <AutoPlaySwipeableViews>
          <Img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg' />
          <Img src='http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d453aab8b48166d224e4adef5.jpg' />
          <Img src='http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8765f664b38fa828ba61e4624.jpg' />
        </AutoPlaySwipeableViews>
        <AutoPlaySwipeableViews>
          <Img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg' />
          <Img src='http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d453aab8b48166d224e4adef5.jpg' />
          <Img src='http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8765f664b38fa828ba61e4624.jpg' />
        </AutoPlaySwipeableViews>
        <AutoPlaySwipeableViews>
          <Img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg' />
          <Img src='http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d453aab8b48166d224e4adef5.jpg' />
          <Img src='http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8765f664b38fa828ba61e4624.jpg' />
        </AutoPlaySwipeableViews>
        <AutoPlaySwipeableViews>
          <Img src='http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg' />
          <Img src='http://a.hiphotos.baidu.com/image/pic/item/503d269759ee3d6d453aab8b48166d224e4adef5.jpg' />
          <Img src='http://c.hiphotos.baidu.com/image/pic/item/cdbf6c81800a19d8765f664b38fa828ba61e4624.jpg' />
        </AutoPlaySwipeableViews>
      </HomeContainer>
    )
  }
}

const mapStateToProps=(state)=>({

})

const mapDispatchToProps=(dispatch)=>bindActionCreators({

},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Home)
