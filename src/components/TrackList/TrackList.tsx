import React from 'react';

import List from '@material-ui/core/List';
import TrackItem from './TrackItem/TrackItem';

interface TrackListProps {
  items: Array<Track | Artist>;
  dark: boolean;
}

const TrackList = ({ items, dark }: TrackListProps) => 
  <List>
    {items.map((item, rank) => 
      <TrackItem key={rank} rank={rank} item={item} dark={dark} />
    )}
  </List>

export default TrackList;