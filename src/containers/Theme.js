import React from 'react';
import {Chip} from 'material-ui';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../store/actions/Config';
import {COLORS} from '../store/constants';
const ThemeContainer=styled.div`
  padding: 10px;
  color: ${props=>props.mode?'inherit':'white'}
`
const ButtonChip=styled(Chip)`
  &&{
    height:25px;
    background: ${props=>props.color};
    margin: 5px;
    display: inline-block;
    font-size: 14px;
    &:focus{
      background: ${props=>props.color};
    }
    >span{
      height: 100%;
    }
  }
`
const Theme=({changeThemeAct,mode})=>{
  return (
    <ThemeContainer mode={mode}>
      <div style={{marginBottom:'10px'}}>主色调</div>
      {
        COLORS.map((item,index)=>(
          <ButtonChip key={index} onClick={()=>changeThemeAct(item)} color={item} label={item} />
        ))
      }
    </ThemeContainer>
  )
}

const mapStateToProps=(state)=>({
  mode: state.Config.mode,
})
const mapDispatchToProps=(dispatch)=>bindActionCreators({
  changeThemeAct: actions.changeTheme,
},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Theme)