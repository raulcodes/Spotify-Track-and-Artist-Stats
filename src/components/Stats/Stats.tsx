import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';

import useStyles from './stats_styles';
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
  const { userData } = stats;
  const [items, setItems] = useState([] as Items);
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
          userName={userData.display_name}
        />
        {
          type === 'tracks'
          ? 
          <CreatePlaylist
            items={items} 
            limit={limit}
            time={time}
            token={token}
            userId={userData.id}
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