import React from 'react';

import List from '@material-ui/core/List';
import TrackItem from './TrackItem';

const TrackList = ({ items, dark }) => {
  return(
    <div>
      <List>
        {items.map((i, key) => 
          <TrackItem k={key} item={i} dark={dark} />
        )}
      </List>
    </div>
  );
};

export default TrackList;