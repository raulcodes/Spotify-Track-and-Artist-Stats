import * as React from 'react';

import useStyles from '../track_styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

interface TrackItemContentProps {
  data: Track | Artist;
  dark: boolean;
}

const isTrack = (data: Track | Artist): data is Track =>
  (data as Track).album !== undefined;

const TrackItemContent = ({ data, dark }: TrackItemContentProps) => {
  const classes = useStyles({ dark });

  if (isTrack(data)) {
    const { album, artists, name } = data;
    return (
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
    )
  } else {
    const { name, images } = data;
    return (
      <>
        <ListItemAvatar>
          <Avatar className={classes.avatar} src={images[0].url} alt={name} />
        </ListItemAvatar>
        <ListItemText primary={name} />
      </>
    );

  }
}

export default TrackItemContent;
