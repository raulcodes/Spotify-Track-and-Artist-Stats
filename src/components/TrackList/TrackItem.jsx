import React from 'react';

import useStyles from './track_styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const TrackItem = ({ k, item }) => {
  const classes = useStyles({});
  const { type, album, name, artists } = item;
  return (
    <>
      <ListItem id={k}>
        <ListItemText className={classes.number}>{(k < 9) ? `0${k+1}` : `${k+1}`}</ListItemText>
        {
          (type === 'track') ?
          <>
            <ListItemAvatar>
              <Avatar className={classes.avatar} variant="rounded" src={album.images[0].url} alt={name} />
            </ListItemAvatar>        
            <ListItemText className={classes.track} primary={name} secondary={artists[0].name} />
          </>
          :
          <>
            <ListItemAvatar>
              <Avatar className={classes.avatar} src={item.images[0].url} alt={name} />
            </ListItemAvatar>
            <ListItemText primary={name} className={classes.track} />
          </>
        }
      </ListItem>
      <Divider className={classes.divider} />
    </>
  )
}

export default TrackItem;