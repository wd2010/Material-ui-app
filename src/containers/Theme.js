import React from 'react';
import {Chip} from 'material-ui';
import styled from 'styled-components';

const ThemeContainer=styled.div`
  padding: 10px;
`
const Theme=()=>
  <ThemeContainer>
    <Chip label="Basic Chip"  />
  </ThemeContainer>

export default Theme