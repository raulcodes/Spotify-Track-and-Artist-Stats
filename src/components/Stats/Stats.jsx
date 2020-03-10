import React from 'react';
import Container from '@material-ui/core/Container';

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
  dark,
}) => {
  React.useEffect(() => {
    dark ? document.body.style = 'background-color: #2B2B2B;'
    : document.body.style = 'background-color: #FFF4E8;'
  }, [])

  const classes = useStyles({ dark });
  return(
    <Container className={classes.container}>
      <RecordIcon className={classes.icon} dark={dark} />
      <div className={classes.card}>
        <Selection
          limit={limit}
          time={time}
          type={type}
          setLimit={setLimit}
          setTime={setTime}
          setType={setType}
          userName={userName}
        />
        <TrackList items={items} dark={dark} />
      </div> 
    </Container>
  );
}

export default Stats