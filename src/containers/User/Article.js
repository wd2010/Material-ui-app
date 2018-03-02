import React from 'react';
import ArticleExpansionCard from '../../components/ArticleExpansionCard.js'

let jobs=[
  {
    id:'1',
    company:'广州悦策网络科技有限公司（广州智点广告）',
    job:'文案',
    time:'2016.07-至今',
    jobDetail:'为品牌双微的日常运营提供文案；同时协助社交媒体活动的策划工作，为品牌宣传广提供话题创意及文案支持，服务品牌',
    list: [
      '服装类：G2000、金利来、Miss Sixty',
      '快消类：绿箭、益达、高露洁、水密码、ABC',
      '母婴类：金霸王、美赞臣、奥飞集团',
    ]
  },
  {
    id:'2',
    company:'深圳市多易得信息技术股份有限公司（潮生活集团）',
    jon:'编辑',
    time:'2015.02-2016.05',
    jobDetail:'',
    list:[
      '负责“广州潮生活V”微信公众平台的日常内容运营及推广工作，见证公众号从50w到后来的110w，成为广州第二大本地生活指南类微信公众平台',
      '及时掌握新闻热点，主要负责资讯创意版块，并创立了“一周吐槽”特色栏目；原创文章最高阅读量突破10万',
      '熟练运用各种微信排版工具，并能运用新榜、西瓜公众号助手等工具进行内容监控和分析',
      '与粉丝进行有效互动，先后负责小黄人玩具、百万葵园门票等等粉丝回馈活动',
      '曾独立负责公司旗下品牌“太原潮生活”的内容运营，得到公司的好评'
    ]
  },
]
const Article=()=>{
  return (
    <div>
      <ArticleExpansionCard jobs={jobs} />
    </div>
  )
}
export default Article;