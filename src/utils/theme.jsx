import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFF4E8',
    },
    secondary: {
      main: '#2B2B2B',
    },
    background: {
      paper: '#FFF4E8',
      default: '#FFF4E8',
    },
    common: {
      black: '#2B2B2B',
      white: 'FFF4E8',
    }
  },
  typography: {
    fontFamily: [
      'lust-script-display',
      'serif'
    ].join(','),
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: 'lust-script-display'
      }
    }
  }
});

export default theme;