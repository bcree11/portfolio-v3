import React from 'react';
import './App.css';
import Routes from './routes'

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme'



export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Routes/>
      </MuiThemeProvider>
    )
  }
}
