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
      'zeitung',
      'serif'
    ].join(','),
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontStyle: 'italic',
        fontWeight: '600',
      },
      body2: {
        fontStyle: 'italic',
      },
      h4: {
        fontFamily: 'alegreya',
        fontWeight: '700',
      },
    },
    MuiButton: {
      outlinedSecondary: {
        fontFamily: 'alegreya',
        fontWeight: '700',
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