import React from 'react';

import List from '@material-ui/core/List';
import TrackItem from './TrackItem';

const TrackList = ({ items, dark }) => {
  return(
    <div>
      <List>
        {items.map((i, rank) => 
          <TrackItem key={rank} rank={rank} item={i} dark={dark} />
        )}
      </List>
    </div>
  );
};

export default TrackList;