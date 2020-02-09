import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

import useStyles from './stats_styles';
import TrackList from '../TrackList/TrackList';
import Selection from '../Selection/Selection';

const Stats = ({
  setLimit,
  setTime,
  setType,
  items,
}) => {
  const classes = useStyles({});
  return(
    <Container className={classes.container}>
      <Card className={classes.card}>
        <Selection
          setLimit={setLimit}
          setTime={setTime}
          setType={setType}
        />
        <TrackList items={items} />
      </Card> 
    </Container>
  );
}

export default Stats