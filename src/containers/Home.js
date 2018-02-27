import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions  from '../store/actions/home';
import {Route, Switch ,Link} from 'react-router-dom';
import styled from 'styled-components';
import {Button, Typography } from 'material-ui';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay } from 'react-swipeable-views-utils';
import {CollectionCard} from '../components/CollectionCard';
import CollectCard from "../components/CollectionCard";
import ReactList from 'react-list';

let AutoPlaySwipeableViews=autoPlay(SwipeableViews);


let Img=styled.img`
      width: 100%;
      max-height: 200px;
    `
let Collection=styled.div`
  display: flex;
  flex-flow: row;
  >div{
    width: 50%;
    &:last-child{margin-left: 2%}
  }
`
let url1='http://pic.people.com.cn/NMediaFile/2018/0208/MAIN201802080927000127896099557.jpg';
let url2='http://img06.tooopen.com/images/20180206/tooopen_sy_233718144546.jpg'

let arr=[
  {username: 'A',headImg:url1,title:'A',content:'content',img:url1},
  {username: 'A',headImg:url2,title:'A',content:'content',img:url2},
  {username: 'A',headImg:url2,title:'A',content:'content',img:url2},
  {username: 'A',headImg:url1,title:'A',content:'content',img:url1},
]
class Home extends Component{
  renderItem(index,key){
    return (
      <Collection key={key}>
        <div>{arr.map((item,index)=><CollectCard {...item} key={index} />)}</div>
        <div>{arr.map((item,index)=><CollectCard {...item} key={index} />)}</div>
      </Collection>
    )
  }

  itemSizeEstimator(index, cache){
    return cache[index] || 450
  }

  render(){
    return (
        <div>
          <AutoPlaySwipeableViews>
            <Img src='http://pic.people.com.cn/NMediaFile/2018/0208/MAIN201802080927000127896099557.jpg' />
            <Img src='http://pic.people.com.cn/NMediaFile/2018/0208/MAIN201802080927000126668060731.jpg' />
            <Img src='http://pic.people.com.cn/NMediaFile/2018/0208/MAIN201802080927000127178909527.jpg' />
          </AutoPlaySwipeableViews>
          <div style={{padding:'10px'}}>
            <Typography variant="headline" component="h2">Lizard</Typography>
            <ReactList
              itemRenderer={::this.renderItem}
              length={arr.length}
              type='variable'
              threshold={500}
              itemSizeEstimator={::this.itemSizeEstimator}
            />
          </div>
        </div>
    )
  }
}


export default Home
