import React from 'react';
import AnswerExpansionCard from '../../components/AnswerExpansionCard.js'
import {Chip  } from 'material-ui';
import styled from 'styled-components';

const AnswerContainer=styled.div`
  background: ${props=>props.theme.palette.background.contentFrame};
`
let jobs=[
  {
    id:'1',
    name:'G2000',
    main:'双微日常文案撰写以及活动期间其他平台供稿',
    time:'2017.3-至今',
    summary:'对服装时尚行业以及职场领域相关话题有了一定了解',
    list: [
      '围绕G2000#职场轻势力#传播主题，规划一列日常话题',
      '根据时下潮流，从选题、排版、设计等各方面尝试内容创新，创造更多职场年轻人感兴趣的内容，重塑品牌轻商务形象',
      '参与品牌2017年度#职场轻势力#系列活动的文案撰写，包括G2000X韩东君的面试直播脚本优化，直播期间活动宣传文案，轻势力巡展活动汇报，活动期间投放的KOL稿件等等',
      '在官方微博发起每月一次的#top fans#有奖评选，一定程度提高了粉丝的活跃度',
    ]
  },
  {
    id:'2',
    name:'金利来男装',
    main:'双微日常文案撰写以及活动期间其他平台供稿',
    time:'2017.9-2018.2',
    summary:'横版图文、情景漫画等多形式的运用，能使老品牌焕发新活力',
    list: [
      '根据金利来#男人的世界2.0#传播主题，完成日常话题规划及文案撰写',
      '应品牌方要求，针对品牌一贯的“老干部”形象做出对策，从时尚杂志风转变到新媒体风，并打造人物采访类王牌栏目，塑造其越来越接地气的形象',
      '参与品牌父亲节期间#爸爸哭了#以及11-12月份期间#兄弟没话说#等活动的文案撰写，包括#爸爸哭了#H5文案，#兄弟没话说#活动期间投放KOL文案',
    ]
  },
  {
    id:'3',
    name:'奥飞贝肯熊',
    main:'双微日常文案撰写',
    time:'2016.7-2017.7',
    summary:'单纯的留言抽奖已经司空见惯，略带难度的趣味性互动更能引起粉丝关注',
    list: [
      '尝试故事新编、情景植入等多种趣味形式，让贝肯熊这一IP更网络化，增加其曝光率',
      '答题游戏，找茬游戏，截图游戏，录音游戏等趣味互动，使得运营期间官方微信后台与粉丝保持良好交流，官方微博粉丝数新增两万多人',

    ]
  },
]

let ItemChip=styled(Chip)`
  &&{
    height:25px;
    background: ${props=>props.color};
    margin: 5px;
    display: inline-block;

    &:focus{
      background: ${props=>props.color};
    }
    >span{
      height: 100%;
    }
  }
`
const Answer=()=>{
  return (
    <AnswerContainer>
      <AnswerExpansionCard jobs={jobs} />
      <div style={{padding: '20px'}}>其他项目：
        <div>
          <ItemChip color='#FFCDD2' label="高维学堂感恩节H5" />
          <ItemChip color='#F8BBD0' label="金霸王X迪士尼#守护童年#" />
          <ItemChip color='#E1BEE7' label="Miss Sixty 白天使新品上市" />
          <ItemChip color='#D1C4E9' label="绿箭X Hebe#求爱大作战#" />
        </div>

      </div>
    </AnswerContainer>
  )
}
export default Answer;