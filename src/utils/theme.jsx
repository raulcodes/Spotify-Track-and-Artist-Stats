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
      outlinedSecondary: {
        fontFamily: 'alegreya',
        fontWeight: '700',
        fontStyle: 'italic',
        textTransform: 'none',
        borderWidth: '1.5px',
        color: colors.white,
        borderColor: colors.white,
        '&:hover': {
          border: `1.5px solid ${colors.black}`,
          color: colors.black,
        },
      },
      label: {
        paddingLeft: '24px',
        paddingRight: '24px'
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
          borderBottom: `2px solid ${colors.black}`,
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