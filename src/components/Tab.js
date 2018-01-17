import React,{Component} from 'react';
import TabContent from './TabContent';
import Nav from './Nav';

class Tab extends Component{

  render(){

    return (
      <div style={{height: '100%'}}>
        <TabContent />
        <Nav />
      </div>
    )
  }
}


export default Tab
