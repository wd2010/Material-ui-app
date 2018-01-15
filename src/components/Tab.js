import React,{Component} from 'react';
import TabContent from './TabContent';
import Nav from './Nav';
import Container from './Container';
class Tab extends Component{

  render(){

    return (
      <div style={{height: '100%'}}>
        <Container>
          <TabContent />
        </Container>
        <Nav />
      </div>
    )
  }
}


export default Tab
