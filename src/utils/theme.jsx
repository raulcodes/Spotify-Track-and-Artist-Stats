import { createMuiTheme } from '@material-ui/core/styles'

const colors = {
  BLACK: '#2B2B2B',
  WHITE: '#FFF4E8',
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.WHITE,
    },
    secondary: {
      main: colors.BLACK,
    },
    background: {
      paper: colors.White,
      default: colors.White,
    },
    common: {
      black: colors.BLACK,
      white: colors.White,
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
      },
      body2: {
        fontFamily: 'lust-display',
      }
    },
    MuiButton: {
      outlinedSecondary: {
        borderColor: colors.BLACK,
        fontFamily: 'lust-display',
        fontStyle: 'italic',
        textTransform: 'none',
        borderWidth: '1.5px',
      },
      label: {
        paddingLeft: '24px',
        paddingRight: '24px'
      },
    },
  }
});

export default theme;