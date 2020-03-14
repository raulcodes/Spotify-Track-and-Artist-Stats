import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';

import useStyles from './stats_styles';
import TrackList from '../TrackList/TrackList';
import Selection from '../Selection/Selection';
import RecordIcon from '../../utils/RecordIcon';

interface StatsProps {
  stats: Stats;
  dark: boolean;
}

const Stats = ({
  stats,
  dark,
}: StatsProps) => {
  React.useEffect(() => {
    dark ? document.body.style.backgroundColor = '#2B2B2B'
    : document.body.style.backgroundColor = '#FFF4E8'
  }, [])

  const [items, setItems] = useState([] as Array<Track | Artist>);
  const [limit, setLimit] = useState(10);
  const [time, setTime] = useState('short');
  const [type, setType] = useState('tracks');
  useEffect(() => {
    setItems(stats[type][time].slice(0, limit))
  }, [limit, time, type]);

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
          userName={stats.userName}
        />
        <TrackList items={items} dark={dark} />
      </div> 
    </Container>
  );
}

export default Stats