import * as React from 'react';

import useStyles from '../track_styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import TrackItemContent from './TrackItemContent';
import TrackItemRank from './TrackItemRank';

interface TrackItemProps {
  rank: number;
  item: Track | Artist;
  dark: boolean;
}

const TrackItem = ({ rank, item, dark }: TrackItemProps) => {
  const classes = useStyles({ dark });
  return (
    <>
      <ListItem id={`${rank}`}>
        <TrackItemRank rank={rank} dark={dark} />
        <TrackItemContent data={item} dark={dark} />
      </ListItem>
      <Divider className={classes.divider} />
    </>
  )
}

export default TrackItem;