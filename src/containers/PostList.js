import React,{Component} from 'react';
import styled from 'styled-components';
import {Button } from 'material-ui';
import {Add as AddIcon} from 'material-ui-icons'
import PostCard from '../components/PostCard';
import ReactList from 'react-list';
class PostList extends Component{
  state={
    posts:[
      {username:'wd2010',headImg:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:'This impressive paella is a perfect party dish and a fun meal to cook together with\n' +
      ' your guests. Add 1 cup of frozen peas along with the mussels, if you like.'},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'',content:'This impressive paella is a perfect party dish and a fun meal to cook together with\n' +
      ' your guests. Add 1 cup of frozen peas along with the mussels, if you like.'},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
      {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
    ]
  }
  renderItem(index,key){
    return <PostCard key={key} {...this.state.posts[index]} />
  }


  itemSizeEstimator(index, cache){
    return cache[index] || 450
  }


  render(){

    let AddBtn=styled(Button)`
      &&{
        position: fixed;
        bottom: 70px;
        right: 20px;
        display: block;
      }
    `
    return (
      <div>
        <ReactList
          itemRenderer={::this.renderItem} length={this.state.posts.length} type='variable' threshold={500} itemSizeEstimator={::this.itemSizeEstimator} />
        <AddBtn fab mini color="primary" aria-label="add" ><AddIcon /></AddBtn>
      </div>
    )
  }
}

export default PostList