import * as React from 'react';

import useStyles from '../track_styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Typography } from '@material-ui/core';

interface TrackItemRankProps {
  rank: number;
}

const TrackItemRank = ({ rank }: TrackItemRankProps) => {
  const classes = useStyles({});
  return (
    <ListItemAvatar className={classes.number}>
      <Typography variant="h4">
        {rank < 9 ? `0${rank + 1}` : `${rank + 1}`}
      </Typography>
    </ListItemAvatar>
  );
};

export default TrackItemRank;
