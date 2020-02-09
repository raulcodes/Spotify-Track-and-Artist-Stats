import React from 'react';
import Card from '@material-ui/core/Card';

import useStyles from './track_styles';
import List from '@material-ui/core/List';
import TrackItem from './TrackItem';

const TrackList = ({ items }) => {
  const classes = useStyles({});

  return(
    <Card className={classes.card}>
      <List>
        {items.map((i, key) => 
          <TrackItem k={key} item={i} />
        )}
      </List>
    </Card>
  );
};

export default TrackList;