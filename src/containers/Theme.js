import React from 'react';
import {Chip} from 'material-ui';
import styled from 'styled-components';

let themeArr=['red','pink','purple','indigo','blue','lightBlue','cyan','teal','green','lightGreen','lime','yellow','orange','brown','grey']
const ThemeContainer=styled.div`
  padding: 10px;
`
const ButtonChip=styled(Chip)`
  &&{
    height:25px;
    background: ${props=>props.theme};
    margin: 5px;
    display: inline-block;
    >span{
      height: 100%;
    }
  }
`

const Theme=()=>{
  return (
    <ThemeContainer>
      {
        themeArr.map((item,index)=>(
          <ButtonChip key={index} theme={item} label={item} />
        ))
      }

    </ThemeContainer>
  )
}


export default Theme