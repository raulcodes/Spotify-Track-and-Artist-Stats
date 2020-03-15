import Button from '@material-ui/core/Button';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import RecordIcon from '../../utils/RecordIcon';
import useStyles from './login_styles';

import authURL from '../../utils/url';

const Login = ({ dark, setDark }) => {
  React.useEffect(() =>{
    dark ? document.body.style.backgroundColor = '#2B2B2B'
    : document.body.style.backgroundColor = '#FFF4E8'
  }, [dark])

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, [])
  
  const classes = useStyles({ dark });

  return(
    <Container className={classes.container}>
      <div className={classes.card}>
        <IconButton className={classes.darkModeIcon} onClick={() => setDark(prev => !prev)}>
          {
            dark
            ? <Brightness7RoundedIcon className={classes.whiteIcon} />
            : <Brightness4RoundedIcon className={classes.blackIcon} />
          }
        </IconButton>
        <div>
          <Typography variant="h4">
            Spotify Stats
          </Typography>
          <Typography variant="body1" className={classes.bodyText}>
            Discover what your top listened to tracks and artists are and turn them into playlists!
          </Typography>
        </div>
        <div className={classes.cardAction}>
          <Button 
            className={classes.logInButton}
            variant="outlined" 
            color="secondary" 
            href={authURL()}
          >
            Log In to Spotify
          </Button>
        </div>
        <div className={classes.iconContainer}>
          <RecordIcon className={classes.icon} dark={dark} />
        </div>
      </div>
    </Container>
  );
};

export default Login;