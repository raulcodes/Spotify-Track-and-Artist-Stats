import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import RecordIcon from '../../utils/RecordIcon';
import Typography from '@material-ui/core/Typography';
import useStyles from './login_styles';

const auth_url = 'https://accounts.spotify.com/authorize?client_id=e2273df8d7f94ae3b5cd7d865251dea3&redirect_uri=http:%2F%2Flocalhost:3000%2Fcallback&response_type=token&state=125'

const Login = () => {
  const classes = useStyles({});

  return(
    <>
    <Container className={classes.container}>
      <Card elevation={0} className={classes.card}>
        <CardContent>
          <Typography variant="h3" className={classes.title}>
            Spotify Stats
          </Typography>
          <Typography variant="body1" className={classes.bodyText}>
            Discover what your Top listened to tracks and artists are and turn them into playlists!
          </Typography>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Button variant="outlined" color="secondary" href={auth_url}>Log In to Spotify</Button>
        </CardActions>
      </Card>
    <RecordIcon className={classes.icon} />
    </Container>
    </>
  );
};

export default Login;