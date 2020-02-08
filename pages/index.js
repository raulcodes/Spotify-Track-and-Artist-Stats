const auth_url = 'https://accounts.spotify.com/authorize?client_id=e2273df8d7f94ae3b5cd7d865251dea3&redirect_uri=http:%2F%2Flocalhost:3000%2Fcallback&response_type=token&state=125'

const Login = () => (
    <a href={auth_url}>Log In to Spotify</a>
);

export default Login;