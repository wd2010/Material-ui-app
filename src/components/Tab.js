import React,{Component} from 'react';

import TabContent from './TabContent';
import Nav from './Nav';
class Tab extends Component{

  render(){

    return (
      <div>
        <div style={{color:'red'}}>
          <TabContent />
        </div>
        <Nav />
      </div>
    )
  }
}


export default Tab
