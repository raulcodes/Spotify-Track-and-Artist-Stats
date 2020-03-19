import * as React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

interface PlaylistDialogProps {
  dialogText: string;
  items: Array<Track | Artist>;
  open: boolean;
  handleClose: () => void;
  placeholderText: string;
}

const PlaylistDialog = ({ dialogText, open, handleClose, placeholderText }: PlaylistDialogProps) => 
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Create a playlist</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {dialogText}
      </DialogContentText>
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
      <Button onClick={handleClose} color="primary">
        Create playlist
      </Button>
    </DialogActions>
  </Dialog>

export default PlaylistDialog;