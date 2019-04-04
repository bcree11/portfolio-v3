import { createMuiTheme } from '@material-ui/core/styles';

// A theme with custom primary and secondary color.
export default createMuiTheme({
  palette: {
    primary: {
      light: '#93CB56',
      main: '#355A20',
      dark: '#059033',
    },
    secondary: {
      light: '#a5a39a',
      main: '#b2a59a',
      dark: '#8ba189',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

//#2e97ff
