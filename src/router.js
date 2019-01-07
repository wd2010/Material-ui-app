import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch,withRouter } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import { MuiThemeProvider,createMuiTheme} from '@material-ui/core';
import {styledTheme} from './public/Theme';
import App from './containers/App';


const Routers=({isProd=false,themeColor,mode})=>{
  const themes=styledTheme({themeColor,mode})
  return(
    <MuiThemeProvider theme={createMuiTheme(themes)} sheetsManager={isProd?(new Map()):null}>
      <ThemeProvider theme={themes}>
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

const mapStateToProps=(state)=>({
  themeColor: state.Config.themeColor,
  mode: state.Config.mode,
})

export default withRouter(connect(mapStateToProps)(Routers));