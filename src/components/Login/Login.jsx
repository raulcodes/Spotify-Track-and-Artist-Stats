import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import RecordIcon from '../../utils/RecordIcon';
import Typography from '@material-ui/core/Typography';
import useStyles from './login_styles';

const auth_url = 'https://accounts.spotify.com/authorize?client_id=e2273df8d7f94ae3b5cd7d865251dea3&redirect_uri=https:%2F%2Fspotify-track-and-artist-stats.now.sh%2Fcallback&response_type=token&state=125'

const Login = () => {
  const classes = useStyles({});

  return(
    <>
    <Container className={classes.container}>
      <div elevation={0} className={classes.card}>
        <div>
          <Typography variant="h4">
            Spotify Stats
          </Typography>
          <Typography variant="body1" className={classes.bodyText}>
            Discover what your Top listened to tracks and artists are and turn them into playlists!
          </Typography>
        </div>
        <div className={classes.cardAction}>
          <Button variant="outlined" color="secondary" href={auth_url}>Log In to Spotify</Button>
        </div>
        <div className={classes.iconContainer}>
          <RecordIcon className={classes.icon} />
        </div>
      </div>
    </Container>
    </>
  );
};

export default Login;