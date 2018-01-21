import React,{Component} from 'react';
import TabContent from './TabContent';
import Nav from './Nav';
import Title from './Title';
import Container from './Container';
import styled from 'styled-components';

class Tab extends Component{

  render(){
    let TabContainer=styled.div``
    return (
      <TabContainer >
        <Title />
        <Container>
          <TabContent />
        </Container>
        <Nav />
      </TabContainer>
    )
  }
}


export default Tab
