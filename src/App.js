import React from 'react';
import './App.css';
import Routes from './routes'
import {Helmet} from "react-helmet"

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme'



export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Helmet>
          <meta charset="utf-8" />
        </Helmet>
        <Routes/>
      </MuiThemeProvider>
    )
  }
}
