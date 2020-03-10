import { createMuiTheme } from '@material-ui/core/styles'
import colors from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.white,
    },
    secondary: {
      main: colors.black,
    },
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
        fontFamily: 'zeitung',
        fontStyle: 'italic',
        fontWeight: '600',
      },
      body2: {
        fontFamily: 'zeitung',
        fontStyle: 'italic',
      }
    },
    MuiButton: {
      outlinedSecondary: {
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