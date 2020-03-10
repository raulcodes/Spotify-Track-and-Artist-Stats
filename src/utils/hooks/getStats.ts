import fetch from 'isomorphic-unfetch';

const getStats = (type: string, time_range: string, token: string): Promise<Response> =>
  fetch(`https://api.spotify.com/v1/me/top/${type}?limit=50&time_range=${time_range}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(response => response.json())
  .then(resp => resp.items);

const getUserName = (token: string): Promise<Response> => 
  fetch('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(response => response.json())
  .then(resp => resp.display_name);

const getAllStats = async (token: string) => ({
  shortTracks: await getStats('tracks', 'short_term', token),
  mediumTracks: await getStats('tracks', 'medium_term', token),
  longTracks: await getStats('tracks', 'long_term', token),
  shortArtists: await getStats('artists', 'short_term', token),
  mediumArtists: await getStats('artists', 'medium_term', token),
  longArtists: await getStats('artists', 'long_term', token),
  userName: await getUserName(token),
})

export default getAllStats;