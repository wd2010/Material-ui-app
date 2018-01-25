import React from 'react';
import {Chip} from 'material-ui';
import styled from 'styled-components';

const ThemeContainer=styled.div`
  padding: 10px;
`

const Theme=()=>{
  let themeObj=['red','pink','purple','deepPurple','indigo','blue','lightBlue','cyan','teal','green',
    'lightGreen','lime','yellow','amber','orange','deepOrange','brown','grey','blueGrey']
  return (
    <ThemeContainer>
      <Chip  style={{background: 'teal',width:'80px'}} />
    </ThemeContainer>
  )
}


export default Theme