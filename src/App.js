import React from 'react';
import './App.css';
import Routes from './routes'
import Layout from './components/layout'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <MuiThemeProvider theme={theme}>
            <Routes/>
          </MuiThemeProvider>
        </Layout>
      </div>
    );
  }
}
