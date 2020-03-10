import React from 'react';

import useStyles from './track_styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';

const TrackItem = ({ k, item, dark }) => {
  const classes = useStyles({ dark });
  const { type, album, name, artists } = item;
  return (
    <>
      <ListItem id={k}>
        <ListItemAvatar className={classes.number}>
          <Typography variant="h4">{(k < 9) ? `0${k+1}` : `${k+1}`}</Typography>
        </ListItemAvatar>
        {
          (type === 'track') ?
          <>
            <ListItemAvatar>
              <Avatar className={classes.avatar} variant="square" src={album.images[0].url} alt={name} />
            </ListItemAvatar>        
            <ListItemText
              primary={`${name.slice(0,35)}${name.length > 35 ? '...' : ''}`} 
              primaryTypographyProps={{ variant: 'body2' }}
              secondary={artists[0].name} 
              secondaryTypographyProps={{ variant: 'subtitle1' }}
            />
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
      <Divider className={classes.divider} />
    </>
  )
}

export default TrackItem;