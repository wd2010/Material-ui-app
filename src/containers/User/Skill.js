import React from 'react';
import {Chip, Avatar, Paper } from 'material-ui';
import styled from 'styled-components';
let SkillContainer=styled.div`
  padding: 10px;
  background: ${props=>props.theme.palette.background.contentFrame};
  >div{
    margin-bottom: 10px;
    overflow: hidden;
    >div{
      float: left;
      &:first-child{
        line-height: 32px;
        width: 22%;
        text-align: right;
      }
    }
  }
`
let ItemChip=styled(Chip)`
  &&{
    background: ${props=>props.color};
    float: left;
    margin-left: 5px;
  }
`
const Skill=()=>{
  return (
    <SkillContainer>
      <div>
        <div>语言：</div>
        <div>
          <ItemChip color='#FFCDD2' label="CET-6"  />
          <ItemChip color='#FFCDD2' label="普通话二级甲等" />
          <ItemChip color='#FFCDD2' label="粤语" />
        </div>
      </div>
      <div>
        <div>IT：</div>
        <div>
          <ItemChip color='#FFCDD2' label="PS"  />
          <ItemChip color='#FFCDD2' label="Office"  />
        </div>
      </div>
      <div>
        <div>新媒体：</div>
        <div>
          <ItemChip color='#FFCDD2' label="新榜"  />
          <ItemChip color='#FFCDD2' label="搜狗微信"  />
          <ItemChip color='#FFCDD2' label="西瓜助手" />
        </div>
      </div>
      <div>
        <div>&nbsp;</div>
        <div><ItemChip color='#FFCDD2' label="各种微信编辑器" /></div>
      </div>
    </SkillContainer>
  )
}
export default Skill;