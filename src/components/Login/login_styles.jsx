import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    paddingTop: '175px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    padding: '20px',
    maxWidth: '500px',
  },
  title: {
    fontFamily: 'lust-script-display',
    fontStyle: 'normal',

    fontWeight: 400,
  },
  bodyText: {
    fontFamily: 'lust-display',
    fontStyle: 'italic',
    fontWeight: 400,
    paddingTop: '24px',
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: '-40vh',
    minHeight: '80vh',
    maxWidth: '650px',
    '-webkit-animation': '$rotation 4s infinite linear',
    '-moz-animation': '$rotation 4s linear infinite',
    'animation': '$rotation 4s linear infinite',
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