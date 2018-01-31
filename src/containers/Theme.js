import React from 'react';
import {Chip} from 'material-ui';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../store/actions/Config';
let themeArr=['red','pink','purple','indigo','blue','cyan','lightBlue','teal','green','lightGreen','lime','yellow','orange','brown','grey']
const ThemeContainer=styled.div`
  padding: 10px;
`
const ButtonChip=styled(Chip)`
  &&{
    height:25px;
    background: ${props=>props.theme};
    margin: 5px;
    display: inline-block;
    font-size: 14px;
    &:focus{
      background: ${props=>props.theme};
    }
    >span{
      height: 100%;
    }
  }
`

const Theme=({changeThemeAct})=>{
  return (
    <ThemeContainer>
      <div style={{marginBottom:'10px'}}>主色调</div>
      {
        themeArr.map((item,index)=>(
          <ButtonChip key={index} onClick={()=>changeThemeAct(item)} theme={item} label={item} />
        ))
      }
    </ThemeContainer>
  )
}

const mapStateToProps=(state)=>({})
const mapDispatchToProps=(dispatch)=>bindActionCreators({
  changeThemeAct: actions.changeTheme,
},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Theme)