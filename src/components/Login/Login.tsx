import * as React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import RecordIcon from '../../utils/RecordIcon';
import useStyles from './login_styles';

import authURL from '../../utils/url';

const Login = () => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, [])
  
  const classes = useStyles({});

  return(
    <Container className={classes.container}>
      <div className={classes.card}>
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
            variant="outlined" 
            color="secondary" 
            href={authURL()}
          >
            Log In to Spotify
          </Button>
        </div>
        <div className={classes.iconContainer}>
          <RecordIcon className={classes.icon} />
        </div>
      </div>
    </Container>
  );
};

export default Login;