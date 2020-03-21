import * as React from 'react';

import PlaylistDialog from './Dialog';
import PlaylistButton from './Button';

interface CreatePlaylistProps {
  items: Items;
  limit: number;
  time: string;
  token: string;
  userId: string;
}

const CreatePlaylist = ({ items, limit, time, token, userId }: CreatePlaylistProps) => {
  const [open, setOpen] = React.useState(false);
  const timeText = () => {
    switch (time) {
      case 'short': return '4 weeks';
      case 'medium': return '6 months';
      case 'long': return 'couple of years';
    }
  }
  const dialogText = `Make a playlist of your top ${limit} tracks for the past ${timeText()}`
  const placeholderText = `Top ${limit} - past ${timeText()}`

  return(
    <>
      <PlaylistButton setOpen={setOpen} />
      <PlaylistDialog 
        open={open} 
        handleClose={() => setOpen(open => !open)} 
        items={items}
        dialogText={dialogText}
        placeholderText={placeholderText}
        token={token}
        userId={userId}
      />
    </>
  )
}

export default CreatePlaylist;