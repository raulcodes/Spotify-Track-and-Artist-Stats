import React, { useEffect } from 'react'
import useReactRouter from 'use-react-router'

const Authorize = () => {
    const { history, location } = useReactRouter();
    const expected_state = '125'

    const getHashValue = (key) => {
        var matches = location.hash.match(new RegExp(key+'=([^&]*)'));
        return matches ? matches[1] : null;
      }

    useEffect(() => {
        console.log('rendered authorize')
        
        if ((expected_state === getHashValue('state')) && (getHashValue('access_token'))) {
            window.sessionStorage.setItem('spotify_token', getHashValue('access_token'))
            history.push({
                pathname: '/stats'
            })
        }
    }, [])

    return (
        <h1>this is my location: {location.pathname}</h1>
    )
}

export default Authorize