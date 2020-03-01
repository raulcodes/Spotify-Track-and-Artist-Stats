import { makeStyles } from '@material-ui/core/styles';
import colors from '../../utils/colors';

const useStyles = makeStyles({
  container: {
    paddingTop: '24px',
    display: 'flex',
    justifyContent: 'center',
    color: props => props.darkMode ? colors.white : colors.black,
  },
  icon: {
    position: 'absolute',
    top: '-15vh',
    maxWidth: '250px',
    '-webkit-animation': '$rotation 9s infinite linear',
    '-moz-animation': '$rotation 9s linear infinite',
    'animation': '$rotation 9s linear infinite',
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
  },
  card: {
    paddingTop: '110px',
  }
});

export default useStyles;