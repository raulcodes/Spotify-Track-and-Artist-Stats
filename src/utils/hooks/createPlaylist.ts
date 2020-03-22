import fetch from 'isomorphic-unfetch';

const createPlaylist = (items: Items, token: string, userId: string, playlistName: string) => {
  const trackIds = items.map(i => i.uri);
    
  fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'name': playlistName,
    })
  })
  .then(response => {       
    if(response.ok) {
      console.log('Created empty playlist')
      return response.json()
    }
      throw new Error('Error creating playlist');
  })
  .then(response => response.id)
  .then(playlistId => 
    // Add tracks to playlist
    fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: 'POST',
      headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "uris": trackIds })
    })
    .then(response => {       
      if(response.ok) {
        return response.json()
      }
      throw new Error('Error adding tracks to playlist');
    })
    .catch(error => {
      console.log('Encountered problems making a playlist:', error.message)
    })
  );
};

export default createPlaylist;
