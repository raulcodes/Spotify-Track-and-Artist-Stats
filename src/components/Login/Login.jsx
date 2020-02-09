import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useStyles from './login_styles';

const auth_url = 'https://accounts.spotify.com/authorize?client_id=e2273df8d7f94ae3b5cd7d865251dea3&redirect_uri=http:%2F%2Flocalhost:3000%2Fcallback&response_type=token&state=125'

const Login = () => {
  const classes = useStyles({});

  return(
    <Container className={classes.container}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h3" className={classes.title}>
            Spotify Stats
          </Typography>
          <Typography variant="body1" className={classes.bodyText}>
            Discover what your Top listened to tracks and artists are and turn them into playlists!
          </Typography>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Button className={classes.button} variant="outlined" href={auth_url}>Log In to Spotify</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Login;