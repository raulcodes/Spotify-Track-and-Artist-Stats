import React from 'react'

const auth_url = process.env.REACT_APP_DEV_AUTH_URL

const Login = () => (
    <a href={auth_url}>
        <button>Log In to Spotify</button>
    </a>
);

export default Login;