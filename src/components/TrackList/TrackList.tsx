import React from 'react';

import List from '@material-ui/core/List';
import TrackItem from './TrackItem/TrackItem';

interface TrackListProps {
  items: Array<Track | Artist>;
}

const TrackList = ({ items }: TrackListProps) => 
  <List>
    {items.map((item, rank) => 
      <TrackItem key={rank} rank={rank} item={item} />
    )}
  </List>

export default TrackList;