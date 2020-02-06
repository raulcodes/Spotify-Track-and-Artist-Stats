import React from 'react';

import List from '@material-ui/core/List';
import TrackItem from './TrackItem';

const TrackList = ({ items }) => (
  <List>
    {items.map((i, key) => 
      <TrackItem k={key} item={i} />
    )}
  </List>
);

export default TrackList;