import React from 'react';

import useStyles from './track_styles';
import List from '@material-ui/core/List';
import TrackItem from './TrackItem/TrackItem';

interface TrackListProps {
  items: Array<Track | Artist>;
}

const TrackList = ({ items }: TrackListProps) => {
  const classes = useStyles({});
  return (
    <div className={classes.listContainer}>
      <List>
        {items.map((item, rank) => (
          <TrackItem key={rank} rank={rank} item={item} />
        ))}
      </List>
    </div>
  );
};

export default TrackList;
