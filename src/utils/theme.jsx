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
    MuiAvatar: {
      root: {
        width: 70,
        height: 70,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: colors.white,
      }
    },
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
        color: colors.white,
        borderColor: colors.white,
      },
      label: {
        paddingLeft: '24px',
        paddingRight: '24px'
      },
    },
    MuiSelect: {
      root: {
        color: colors.white,
      }
    }
  }
});

export default theme;