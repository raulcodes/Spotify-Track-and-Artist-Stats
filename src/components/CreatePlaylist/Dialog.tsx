import * as React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import useStyles from './playlist_styles';
import useCreatePlaylist from '../../utils/hooks/useCreatePlaylist';
import RecordIcon from '../../utils/RecordIcon';

interface PlaylistDialogProps {
  dialogText: string;
  items: Items;
  open: boolean;
  handleClose: () => void;
  placeholderText: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSnackbar: React.Dispatch<React.SetStateAction<string>>;
  token: string;
  userId: string;
}

const PlaylistDialog = ({
  dialogText,
  items,
  open,
  handleClose,
  placeholderText,
  setOpen,
  setSnackbar,
  token,
  userId,
}: PlaylistDialogProps) => {
  const classes = useStyles({});
  const [loading, setLoading] = React.useState(false);

  const handleCreate = () => {
    setLoading(true);
    useCreatePlaylist({
      items,
      token,
      userId,
      playlistName: placeholderText,
      setLoading,
      setOpen,
      setSnackbar,
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{dialogText}</DialogTitle>
      <DialogContent className={classes.content}>
        {loading ? (
          <RecordIcon width={7} />
        ) : (
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Playlist name"
            type="text"
            fullWidth
            placeholder={placeholderText}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleCreate()}
        >
          Create playlist
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlaylistDialog;
