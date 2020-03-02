const authURL = (darkMode) => {
  const host = 'https://accounts.spotify.com/authorize';
  const code = darkMode ? '246' : '124';
  const params = {
    'client_id': 'e2273df8d7f94ae3b5cd7d865251dea3',
    'redirect_uri': 'https://spotify-track-and-artist-stats.now.sh/callback',
    // 'redirect_uri': 'http://localhost:3000/callback',
    'response_type': 'token',
    'state': code,
  };
  let urlParams = '';
  Object.entries(params).forEach(([k, v]) => {
   urlParams += `${k}=${v}&`;
  });
  return encodeURI(`${host}?${urlParams.slice(0, urlParams.length-1)}`);
}

export default authURL;