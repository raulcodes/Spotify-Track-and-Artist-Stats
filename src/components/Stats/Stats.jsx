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
  darkMode,
}) => {
  React.useEffect(() => {
    darkMode ? document.body.style = 'background-color: #2B2B2B;'
    : document.body.style = 'background-color: #FFF4E8;'
  }, [])

  const classes = useStyles({ darkMode });
  return(
    <Container className={classes.container}>
      <RecordIcon className={classes.icon} darkMode={darkMode} />
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
        <TrackList items={items} darkMode={darkMode} />
      </div> 
    </Container>
  );
}

export default Stats