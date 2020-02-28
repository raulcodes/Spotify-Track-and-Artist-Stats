import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

import useStyles from './stats_styles';
import TrackList from '../TrackList/TrackList';
import Selection from '../Selection/Selection';
import RecordIcon from '../../utils/RecordIcon';

const Stats = ({
  limit,
  time,
  type,
  setLimit,
  setTime,
  setType,
  items,
  userName,
}) => {
  const classes = useStyles({});
  return(
    <Container className={classes.container}>
      <RecordIcon className={classes.icon} />
      <Card elevation={0} className={classes.card}>
        <Selection
          limit={limit}
          time={time}
          type={type}
          setLimit={setLimit}
          setTime={setTime}
          setType={setType}
          userName={userName}
        />
        <TrackList items={items} />
      </Card> 
    </Container>
  );
}

export default Stats