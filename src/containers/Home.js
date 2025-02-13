import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../store/actions/home';
import {Route, Switch ,Link} from 'react-router-dom';
import styled from 'styled-components';
import {Button } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay } from 'react-swipeable-views-utils';

let AutoPlaySwipeableViews=autoPlay(SwipeableViews);
let HomeContainer=styled.div``

let Img=styled.img`
      width: 100%;
      max-height: 200px;
    `

class Home extends Component{

  render(){

    return (
      <HomeContainer >

        <div>
          <AutoPlaySwipeableViews>
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/d6ca7bcb0a46f21f46612acbfd246b600d33aed5.jpg' />
            <Img src='http://d.hiphotos.baidu.com/image/pic/item/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg' />
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059f550a1832334349b023bbae3.jpg' />
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews>
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/d6ca7bcb0a46f21f46612acbfd246b600d33aed5.jpg' />
            <Img src='http://d.hiphotos.baidu.com/image/pic/item/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg' />
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059f550a1832334349b023bbae3.jpg' />
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews>
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/d6ca7bcb0a46f21f46612acbfd246b600d33aed5.jpg' />
            <Img src='http://d.hiphotos.baidu.com/image/pic/item/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg' />
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059f550a1832334349b023bbae3.jpg' />
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews>
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/d6ca7bcb0a46f21f46612acbfd246b600d33aed5.jpg' />
            <Img src='http://d.hiphotos.baidu.com/image/pic/item/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg' />
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059f550a1832334349b023bbae3.jpg' />
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews>
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/d6ca7bcb0a46f21f46612acbfd246b600d33aed5.jpg' />
            <Img src='http://d.hiphotos.baidu.com/image/pic/item/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg' />
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059f550a1832334349b023bbae3.jpg' />
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews>
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/d6ca7bcb0a46f21f46612acbfd246b600d33aed5.jpg' />
            <Img src='http://d.hiphotos.baidu.com/image/pic/item/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg' />
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059f550a1832334349b023bbae3.jpg' />
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews>
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/d6ca7bcb0a46f21f46612acbfd246b600d33aed5.jpg' />
            <Img src='http://d.hiphotos.baidu.com/image/pic/item/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg' />
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059f550a1832334349b023bbae3.jpg' />
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews>
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/d6ca7bcb0a46f21f46612acbfd246b600d33aed5.jpg' />
            <Img src='http://d.hiphotos.baidu.com/image/pic/item/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg' />
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059f550a1832334349b023bbae3.jpg' />
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews>
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/d6ca7bcb0a46f21f46612acbfd246b600d33aed5.jpg' />
            <Img src='http://d.hiphotos.baidu.com/image/pic/item/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg' />
            <Img src='http://a.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059f550a1832334349b023bbae3.jpg' />
          </AutoPlaySwipeableViews>

        </div>
      </HomeContainer>
    )
  }
}


export default Home
