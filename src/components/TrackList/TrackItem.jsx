import React from 'react';

import useStyles from './track_styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';

const TrackItem = ({ k, item }) => {
  const classes = useStyles({});
  const { type, album, name, artists } = item;
  return (
    <>
      <ListItem id={k}>
        <ListItemText className={classes.number}>
          <Typography variant="h3">{(k < 9) ? `0${k+1}` : `${k+1}`}</Typography>
        </ListItemText>
        {
          (type === 'track') ?
          <>
            <ListItemAvatar>
              <Avatar className={classes.avatar} variant="rounded" src={album.images[0].url} alt={name} />
            </ListItemAvatar>        
            <ListItemText variant="h4" primary={name} secondary={artists[0].name} />
          </>
          :
          <>
            <ListItemAvatar>
              <Avatar className={classes.avatar} src={item.images[0].url} alt={name} />
            </ListItemAvatar>
            <ListItemText primary={name} />
          </>
        }
      </ListItem>
      <Divider />
    </>
  )
}

export default TrackItem;