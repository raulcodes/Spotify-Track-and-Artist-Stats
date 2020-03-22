import { createMuiTheme, fade } from '@material-ui/core/styles'
import colors from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.white,
    },
    secondary: {
      main: fade(colors.black, .7),
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
    MuiDialog: {
      paper: {
        backgroundColor: colors.blue,
      }
    },
    MuiDialogTitle: {
      root: {
        color: colors.white,
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
      h6: {
        fontFamily: 'alegreya',
        fontWeight: '700',
      },
    },
    MuiButton: {
      root: {
        color: colors.white,
        fontFamily: 'alegreya',
        fontWeight: '700',
        textTransform: 'none',
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: fade(colors.white, 1),
        },
      },
      outlinedSecondary: {
        color: colors.white,
        borderWidth: '1.5px',
        borderColor: colors.white,
        '&:hover': {
          border: `1.5px solid ${fade(colors.black, .7)}`,
          color: fade(colors.black, .7),
        },
        marginTop: '18px',
        marginBottom: '18px',
      },
    },
    MuiSelect: {
      root: {
        color: colors.white,
      },
      icon: {
        color: colors.white,
      },
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottom: `2px solid ${fade(colors.black, .7)}`,
        },
        '&:before': {
          borderBottom: `1px solid ${colors.white}`,
        },
        '&:hover:not($disabled):before': {
          borderBottom: `2px solid ${colors.white}`,
        },
      },
    }
  }
});

export default theme;