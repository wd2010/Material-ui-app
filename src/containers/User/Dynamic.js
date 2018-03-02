import React from 'react';
import ReactList from 'react-list';
import PostCard from '../../components/PostCard';
const posts=[
  {username:'wd2010',headImg:require('../../assets/img/header.jpg'),time:'2017-03-13',title:'这个春日，时装精把牛仔单品穿出了活力性感',img:require('../../assets/img/1.jpg'),content:'666'},
  {username:'wd2010',headImg:'',time:'2017-03-13',title:'这个春日，时装精把牛仔单品穿出了活力性感',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:'999'},
  {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
  {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
  {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
  {username:'wd2010',headImg:'',time:'September 14, 2016',title:'Shrimp and Chorizo Paella',img:'http://img06.tooopen.com/images/20171214/tooopen_sy_230333228199.jpg',content:''},
]

const renderItem=({index,key,posts})=>
    <PostCard key={key} {...posts[index]} />

const itemSizeEstimator=(index, cache)=>cache[index] || 450


const Dynamic=()=>{
  return (
    <div >
      {
        posts.map((item,index)=>(
          <PostCard key={index} {...item} />
        ))
      }
    </div>
  )
}
export default Dynamic;