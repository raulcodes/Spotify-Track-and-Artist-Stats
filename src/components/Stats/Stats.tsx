import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useRouter } from 'next/router';

import useStyles from './stats_styles';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import CreatePlaylist from '../CreatePlaylist/CreatePlaylist';
import TrackList from '../TrackList/TrackList';
import Selection from '../Selection/Selection';

interface StatsProps {
  stats: Stats;
  token: string;
}

const Stats = ({
  stats,
  token,
}: StatsProps) => {
  const router = useRouter();
  const { userData } = stats;
  const [items, setItems] = useState([] as Items);
  const [limit, setLimit] = useState(10);
  const [time, setTime] = useState('short');
  const [type, setType] = useState('tracks');
  useEffect(() => {
    if (stats[type][time]) {
      setItems(stats[type][time].slice(0, limit))
    } else {
      router.push('/');
    }
  }, [limit, time, type]);

  const [snackbar, setSnackbar] = React.useState('');

  const classes = useStyles();
  return(
    <Container className={classes.container}>
      <div className={classes.card}>
        <Selection
          limit={limit}
          time={time}
          type={type}
          setLimit={setLimit}
          setTime={setTime}
          setType={setType}
          userName={userData.display_name}
        />
        {
          type === 'tracks'
          ? 
          <CreatePlaylist
            items={items} 
            limit={limit}
            time={time}
            setSnackbar={setSnackbar}
            token={token}
            userId={userData.id}
          />
          :
          null
        }
        <TrackList items={items} />
      </div> 
      <Snackbar open={snackbar === 'success'} autoHideDuration={6000} onClose={() => setSnackbar('')}>
        <Alert onClose={() => setSnackbar('')} severity="success">
          Playlist created successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={snackbar === 'error'} autoHideDuration={6000} onClose={() => setSnackbar('')}>
        <Alert onClose={() => setSnackbar('')} severity="error">
          Ran into an unexpected error! Try again later.
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Stats