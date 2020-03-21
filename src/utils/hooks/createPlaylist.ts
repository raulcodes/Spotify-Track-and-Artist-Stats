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
    });
  );
};

export default createPlaylist;
    //     let track_uris = []
    //     let playlist_name = ''
    //     let playlist_description = ''
    //     this.state[`${time}_${type}`].slice(0,limit).forEach(track => {
    //         track_uris.push(track.uri)
    //     })
    //     switch (time) {
    //         case 'short':
    //             playlist_name = 'Short Term Top Ten'
    //             playlist_description = "This is a playlist of your top ten tracks in the last four weeks."
    //             break;
    //         case 'medium':
    //             playlist_name = "Medium Term Top Ten"
    //             playlist_description = "This is a playlist of your top ten tracks in the last six months."
    //             break;
    //         case 'long':
    //             playlist_name = 'Long Term Top Ten'
    //             playlist_description = 'This is a playlist of your top ten tracks in the last few years.'
    //             break;
    //         default:
    //     }

    //     // GET current user's id
    //     fetch('https://api.spotify.com/v1/me', {
    //         headers: {
    //             'Authorization': 'Bearer ' + access_token
    //         }
    //     })
    //     .then(response => {
    //         if(response.ok) {
    //             console.log('got user\'s id')
    //             return response.json()
    //         }
    //         throw new Error('Error getting user settings');
    //     })
    //     .then(response => response.id)
    //     .then(id => {
    //         // Create empty playlist with appropriate name and description
    //         return fetch(`https://api.spotify.com/v1/users/${id}/playlists`, {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': 'Bearer ' + access_token,
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 'name': playlist_name,
    //                 'description': playlist_description
    //             })
    //         })
    //     })
    //     .then(response => {       
    //         if(response.ok) {
    //             console.log('Created empty playlist')
    //             return response.json()
    //         }
    //         throw new Error('Error creating playlist');
    //     })
    //     .then(response => response.id)
    //     .then(id => {
    //         // Add tracks to playlist
    //         return fetch(`https://api.spotify.com/v1/playlists/${id}/${type}`, {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': 'Bearer ' + access_token,
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ "uris": track_uris })
    //         })
    //     })
    //     .then(response => {       
    //         if(response.ok) {
    //             this.props.alert.success(`Successfully created playlist ${playlist_name}`)
    //             return response.json()
    //         }
    //         throw new Error('Error adding tracks to playlist');
    //     })
    //     .catch(error => {
    //         this.props.alert.error('Encountered problems making a playlist:', error.message)
    //         console.log('Encountered problems making a playlist:', error.message)
    //     })
    // }