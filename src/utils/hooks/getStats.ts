import fetch from 'isomorphic-unfetch';

const getStats = (type: string, time_range: string, token: string): Promise<Response> =>
  fetch(`https://api.spotify.com/v1/me/top/${type}?limit=50&time_range=${time_range}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(response => response.json())
  .then(resp => resp.items);

const getUserData = (token: string): Promise<Response> => 
  fetch('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(response => response.json())

const getAllStats = async (token: string) => ({
  tracks: {
    short: await getStats('tracks', 'short_term', token), 
    medium: await getStats('tracks', 'medium_term', token),
    long: await getStats('tracks', 'long_term', token),
  },
  artists: {
    short: await getStats('artists', 'short_term', token),
    medium: await getStats('artists', 'medium_term', token),
    long: await getStats('artists', 'long_term', token),
  },
  userData: await getUserData(token),
});

export default getAllStats;