import React from 'react';

import List from '@material-ui/core/List';
import TrackItem from './TrackItem';

const TrackList = ({ items, darkMode }) => {
  return(
    <div>
      <List>
        {items.map((i, key) => 
          <TrackItem k={key} item={i} darkMode={darkMode} />
        )}
      </List>
    </div>
  );
};

export default TrackList;