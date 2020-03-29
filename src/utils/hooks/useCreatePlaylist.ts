import fetch from 'isomorphic-unfetch';

interface playlistHookProps {
  items: Items;
  token: string;
  userId: string;
  playlistName: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSnackbar: React.Dispatch<React.SetStateAction<string>>;
}

const useCreatePlaylist = ({
  items,
  token,
  userId,
  playlistName,
  setLoading,
  setOpen,
  setSnackbar,
}: playlistHookProps) => {
  const trackIds = items.map((i) => i.uri);

  fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: playlistName,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error creating a playlist');
    })
    .then((response) => response.id)
    .then((playlistId) =>
      // Add tracks to playlist
      fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uris: trackIds }),
      })
        .then((response) => {
          if (response.ok) {
            setTimeout(() => {
              setLoading(false);
              setOpen(false);
              setSnackbar('success');
            }, 2000);
            return response.json();
          }
          throw new Error('Error adding tracks to playlist');
        })
        .catch(() => {
          setSnackbar('error');
        })
    );
};

export default useCreatePlaylist;
