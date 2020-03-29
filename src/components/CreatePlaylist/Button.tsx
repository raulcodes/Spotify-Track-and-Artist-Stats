import * as React from 'react';

import Button from '@material-ui/core/Button';

interface PlaylistButtonProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlaylistButton = ({ setOpen }: PlaylistButtonProps) => (
  <Button
    variant="outlined"
    color="secondary"
    onClick={() => setOpen((open) => !open)}
  >
    Make a playlist with these tracks!
  </Button>
);

export default PlaylistButton;
