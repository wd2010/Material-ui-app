import React,{Component} from 'react';
import styled from 'styled-components';
import {Button } from 'material-ui';
import {Add as AddIcon} from 'material-ui-icons'

class PostList extends Component{

  render(){

    let AddBtn=styled(Button)`
      &&{
        position: fixed;
        bottom: 70px;
        right: 20px;
        display: block;
      }
    `
    return (
      <div>

        <AddBtn fab mini color="primary" aria-label="add" ><AddIcon /></AddBtn>
      </div>
    )
  }
}

export default PostList