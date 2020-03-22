import { makeStyles } from '@material-ui/core/styles';

import colors from '../../utils/colors';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    maxHeight: '100vh',
    color: colors.white,
  },
  card: {
    padding: '20px',
    paddingTop: '170px',
    maxWidth: '500px',
  },
  bodyText: {
    paddingTop: '24px',
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'center',
  },
  whiteIcon: {
    color: colors.white,
  },
  blackIcon: {
    color: colors.black,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'center',
    position: 'relative',
    marginTop: '10vh',
    width: '25vh',
    '-webkit-animation': '$rotation 7s infinite linear',
    '-moz-animation': '$rotation 7s linear infinite',
    'animation': '$rotation 7s linear infinite',
  },
  '@-moz-keyframes rotation': { 
    '100%': { 
      '-moz-transform': 'rotate(360deg)', 
    } 
  },
  '@-webkit-keyframes rotation': { 
    '100%': { 
      '-webkit-transform': 'rotate(360deg)'
    } 
  },
  '@keyframes rotation': { 
    '100%': { 
      '-webkit-transform': 'rotate(360deg)', 
      'transform': 'rotate(360deg)' 
    } 
  }
});

export default useStyles;