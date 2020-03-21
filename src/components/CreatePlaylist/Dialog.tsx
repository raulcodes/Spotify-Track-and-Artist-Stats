import * as React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import createPlaylist from '../../utils/hooks/createPlaylist';

interface PlaylistDialogProps {
  dialogText: string;
  items: Items;
  open: boolean;
  handleClose: () => void;
  placeholderText: string;
  token: string;
  userId: string;
}

const PlaylistDialog = ({ 
  dialogText, 
  items, 
  open, 
  handleClose, 
  placeholderText,
  token,
  userId,
}: PlaylistDialogProps) => 
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>{dialogText}</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Playlist name"
        type="text"
        fullWidth
        placeholder={placeholderText}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Button onClick={() => createPlaylist(items, token, userId, dialogText)} color="primary">
        Create playlist
      </Button>
    </DialogActions>
  </Dialog>

export default PlaylistDialog;