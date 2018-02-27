import React from 'react';
import ReactList from 'react-list';
import PostCard from '../../components/PostCard';
const posts=[
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