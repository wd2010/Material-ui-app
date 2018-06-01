import React from 'react';
import ReactList from 'react-list';
import PostCard from '../../components/PostCard';
const posts=[
  {time:'2016-09-21',title:'我追她用尽了种种套路，结果她却拜倒在……',img:require('../../assets/img/0.jpg'),url:'http://mp.weixin.qq.com/s?__biz=MzAwNTQyNTY2Mw==&mid=2650362314&idx=1&sn=60b793c87f0666dc98689ccf57317eae&chksm=8311215ab466a84cf062cc9b73a540f55ded45b2c6aa804e1187d6ec78e51ea9aea446cb68cf&mpshare=1&scene=4#wechat_redirect&srcid=0227I90uRGlL5XTRj3a8UmDf#rd'},
  {time:'2017-03-13',title:'这个春日，时装精把牛仔单品穿出了活力性感',img:require('../../assets/img/1.jpg'),url:'http://mp.weixin.qq.com/s?__biz=MjM5NzQxMzM0OQ==&mid=2650373008&idx=1&sn=49948bbf27b3ea6fd5988b6e586b6163&chksm=bed7b31a89a03a0cac27f661df9d4332d97a1f0fa23b16e70dc1d2beeba432122f9bc0d15749&mpshare=1&scene=4#wechat_redirect&srcid=0314IByo4EEQtUmIsSwh82qd#rd'},
  {time:'2017-03-13',title:'谈资 | 没有事业线可露？那就露背吧!',img:require('../../assets/img/2.jpg'),url:'https://mp.weixin.qq.com/s?__biz=MzA5NDI1NDAzMA==&mid=2651776240&idx=1&sn=99101a20b21bfd5b0679468c2bfd47c0&chksm=8bab2251bcdcab47793cf334f50ee05a783cc4c4bcdec52e5951b0e155e15e8bc68d25cc0d37&mpshare=1&scene=4#wechat_redirect&srcid=0306WsLTGjdbzfUlcGbT7aNE#rd'},
  {time:'2017-03-13',title:'看世界最美脸蛋，如何打造春日小性感',img:require('../../assets/img/3.jpg'),url:'https://mp.weixin.qq.com/s?__biz=MzA4OTMwNTc5NA==&mid=2650873401&idx=1&sn=29dd95c8e20e19feebe7e9d0103296b0&chksm=8be95994bc9ed08266bc870d639a1a41fb8ceed9490d5ae38367a3f3d52c940959293c4d3528&mpshare=1&scene=4#wechat_redirect&srcid=0228LjdBAfdfN1zr8g9xQGFr#rd'},
  {time:'2016-03-02',title:'他花了13年，把日本的七彩花田搬到广州！这片花海，让所有人美哭.....',img:require('../../assets/img/4.jpg'),url:'https://mp.weixin.qq.com/s?__biz=MzA3NzU1MjIyMQ==&mid=403160807&idx=1&sn=8c279ce13fe5a50700cd6045b15f1718&mpshare=1&scene=4#wechat_redirect&srcid=03060XYsohCF5XfmE89Lpma3#rd'},
  {time:'2016-09-28',title:'超人妈妈 | 怀孕5个月不幸患癌，她做出了一个平凡而伟大的选择……',img:require('../../assets/img/41.jpg'),url:'http://mp.weixin.qq.com/s?__biz=MzIzOTI5NTYyNQ==&mid=2247483830&idx=1&sn=8c5f4ee096be7b21eb03bbc4591db27d&chksm=e92d0c50de5a85464b0b7e9c1156a380609377de7fdabb413b0be3daf338bdf9197ad1dd3dda&mpshare=1&scene=4#wechat_redirect&srcid=0928dAqmVfU4bNDr4MrWAIww#rd'},
  {time:'2018-01-29',title:'是谁的蛙儿子！竟然跑到了人家店里干了这事儿！',img:require('../../assets/img/5.jpg'),url:'https://mp.weixin.qq.com/s?__biz=MzA4MzAzNTcwNA==&mid=2648944636&idx=3&sn=82dbc4a8a066904181522c9c4031ca9d&chksm=87eb9cabb09c15bd2cbb7224a3ba5d5ed064da9c39444f2af8a998ae1f441534fae94e51abcd&mpshare=1&scene=4#wechat_redirect&srcid=0306vkb7JRHJohNIhvYkLh3L#rd'},
  {time:'2017-12-15',title:'一年都没涨工资？你可能穿错了职场装',img:require('../../assets/img/6.jpg'),url:'https://mp.weixin.qq.com/s?__biz=MjM5NDEwODU0MA==&mid=2649778622&idx=1&sn=76f9d1b24a970f0b43d23688b8bfdad1&chksm=be880cad89ff85bb162f4077b6487a423c41a1b9407f106838a2f9c9fc9b7c5750827f38078a&mpshare=1&scene=4#wechat_redirect&srcid=0306blzrJGFS5BuqUzhkl9lJ#rd'},
  {time:'2017-10-11',title:'有颜值敢拼搏，韩东君大概是少年最美好的打开方式',img:require('../../assets/img/7.jpg'),url:'https://mp.weixin.qq.com/s?__biz=MzAwNzM0NzAyNA==&mid=2649844290&idx=1&sn=01c10bb8141c6ae235ee1d41722c16ee&chksm=837a447db40dcd6be32ff8cd9f5a067feb95b1935f4fe1b983544e299542088f8438567fe022&mpshare=1&scene=4#wechat_redirect&srcid=03068RpIhH0HzhUUA3p8YUPe#rd'},
  {time:'2017-10-20',title:'美少女苏维娅的职场日记',img:require('../../assets/img/8.jpg'),url:'https://mp.weixin.qq.com/s?__biz=MjM5NDEwODU0MA==&mid=2649779913&idx=1&sn=4d97c3307eeeb6dad9eac4e169f13df0&chksm=be880bda89ff82cc7df1b09f4eddf14745864baa24b2a99bb41cec8abd996557797bd9ec9cb2&mpshare=1&scene=4#wechat_redirect&srcid=0531ndiLBUHe6zcDZE5XJC0G#rd'},
  {time:'2018-05-20',title:'520超福利，袁博超小姐姐的爱心请查收！',img:require('../../assets/img/10.jpg'),url:'https://mp.weixin.qq.com/s?__biz=MjM5NDEwODU0MA==&mid=2649779781&idx=1&sn=d78c44a0a82864a09a74ca7eeec67753&chksm=be880b5689ff8240858f4be7284ba9d839ed7144003e00720e3ce89c82ba06302ee8bc63322d&mpshare=1&scene=4#wechat_redirect&srcid=0531HUzQFrXKfkvLUaHCYk6y#rd'},
  {time:'2016-10-24',title:'当迪士尼没电，小孩大人分分钟都被吓哭',img:require('../../assets/img/9.jpg'),url:'https://mp.weixin.qq.com/s?__biz=MjM5MDU2MjkyNw==&mid=2649518005&idx=1&sn=c56466417c07add13faa6370bab01f4b&chksm=be5a20b5892da9a30eae4fbfb17e3b1a0315da56ccaa20f3720942321a00f7eecee83a03f27d&mpshare=1&scene=4#wechat_redirect&srcid=0306E54DU06P7A1v2G4UAnzD#rd'},

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