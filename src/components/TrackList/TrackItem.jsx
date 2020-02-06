import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

const TrackItem = ({ k, item }) => {
    const { type, album, name, artists } = item;
    return (
        <>
            <ListItem id={k}>
                <ListItemAvatar>
                    {
                        (type === 'track') ?
                        <Avatar variant="rounded" src={album.images[0].url} alt={name} />
                        :
                        <Avatar variant="rounded" src={item.images[0].url} alt={name} />
                    }
                </ListItemAvatar>
                <ListItemText primary={name} secondary={artists[0].name} />
            </ListItem>
            <Divider />
        </>
    )
}

export default TrackItem;