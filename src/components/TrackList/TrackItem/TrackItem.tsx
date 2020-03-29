import * as React from 'react';

import useStyles from '../track_styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import TrackItemContent from './TrackItemContent';
import TrackItemRank from './TrackItemRank';

interface TrackItemProps {
  rank: number;
  item: Track | Artist;
}

const TrackItem = ({ rank, item }: TrackItemProps) => {
  const classes = useStyles();
  return (
    <>
      <ListItem id={`${rank}`}>
        <TrackItemRank rank={rank} />
        <TrackItemContent data={item} />
      </ListItem>
      <Divider className={classes.divider} variant="middle" />
    </>
  );
};

export default TrackItem;
