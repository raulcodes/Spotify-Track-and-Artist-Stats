import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
// import Fab from '@material-ui/core/Fab';

import useStyles from './stats_styles';
import TrackList from '../TrackList/TrackList';
import Selection from '../Selection/Selection';

const Stats = ({
  limit,
  time,
  type,
  setLimit,
  setTime,
  setType,
  items,
}) => {
  const classes = useStyles({});
  return(
    <Container className={classes.container}>
      <Card elevation={0} className={classes.card}>
        <Selection
          limit={limit}
          time={time}
          type={type}
          setLimit={setLimit}
          setTime={setTime}
          setType={setType}
        />
        <TrackList items={items} />
      </Card> 
      {/* <Fab>

      </Fab> */}
    </Container>
  );
}

export default Stats