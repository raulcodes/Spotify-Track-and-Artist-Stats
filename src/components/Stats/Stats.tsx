import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';

import useStyles from './stats_styles';
import CreatePlaylist from '../CreatePlaylist/CreatePlaylist';
import TrackList from '../TrackList/TrackList';
import Selection from '../Selection/Selection';

interface StatsProps {
  stats: Stats;
}

const Stats = ({
  stats,
}: StatsProps) => {
  const { userName } = stats;
  const [items, setItems] = useState([] as Array<Track | Artist>);
  const [limit, setLimit] = useState(10);
  const [time, setTime] = useState('short');
  const [type, setType] = useState('tracks');
  useEffect(() => {
    setItems(stats[type][time].slice(0, limit))
  }, [limit, time, type]);

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
          userName={userName}
        />
        {
          type === 'tracks'
          ? 
          <CreatePlaylist
            items={items} 
            limit={limit}
            time={time}
          />
          :
          null
        }
        <TrackList items={items} />
      </div> 
    </Container>
  );
}

export default Stats