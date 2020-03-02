import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import RecordIcon from '../../utils/RecordIcon';
import Typography from '@material-ui/core/Typography';
import useStyles from './login_styles';
import IconButton from '@material-ui/core/IconButton';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';

import authURL from '../../utils/url';

const Login = () => {
  const [darkMode, setDarkMode] = React.useState(false)
  React.useEffect(() =>{
    darkMode ? document.body.style.backgroundColor = '#2B2B2B'
    : document.body.style.backgroundColor = '#FFF4E8'
  }, [darkMode])

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, [])
  
  const classes = useStyles({ darkMode });

  return(
    <Container className={classes.container}>
      <div className={classes.card}>
        <IconButton className={classes.darkModeIcon} onClick={() => setDarkMode(prev => !prev)}>
          {
            darkMode 
            ? <Brightness7RoundedIcon className={classes.whiteIcon} />
            : <Brightness4RoundedIcon className={classes.blackIcon} />
          }
        </IconButton>
        <div>
          <Typography variant="h4">
            Spotify Stats
          </Typography>
          <Typography variant="body1" className={classes.bodyText}>
            Discover what your Top listened to tracks and artists are and turn them into playlists!
          </Typography>
        </div>
        <div className={classes.cardAction}>
          <Button 
            className={classes.logInButton}
            variant="outlined" 
            color="secondary" 
            href={authURL(darkMode)}
          >
            Log In to Spotify
          </Button>
        </div>
        <div className={classes.iconContainer}>
          <RecordIcon className={classes.icon} darkMode={darkMode} />
        </div>
      </div>
    </Container>
  );
};

export default Login;