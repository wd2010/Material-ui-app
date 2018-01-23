import React, {Component} from 'react';
import TabContent from './TabContent';
import Nav from './Nav';
import Container from './Container';
import styled,{withTheme} from 'styled-components';
import Scroll from './Scroll';

class Tab extends Component {

  render() {
    let TabContainer = styled.div``
    return (
      <TabContainer>

        <TabContent/>
        <Container type='menu'><Nav /></Container>
        <Scroll />
      </TabContainer>
    )
  }
}

export default Tab
