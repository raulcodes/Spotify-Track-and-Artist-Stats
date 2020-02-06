import { useState, useEffect } from 'react'

const useGetStats = (type, time_range, token) => {
    const [stats, setStats] = useState([])

    async function getStats() {
        return fetch(`https://api.spotify.com/v1/me/top/${type}?limit=50&time_range=${time_range}`, {
            headers: {
                'Authorization': 'Bearer ' + token 
            }
        })
        .then(response => response.json())
        .then(resp => {
            console.log(resp.items)
            setStats(resp.items)
        })
    }

    useEffect(() => {getStats()}, [])

    return stats
}

const useGetAllStats = () => {
    const token = window.sessionStorage.getItem('spotify_token')
    const short_tracks = useGetStats('tracks', 'short_term', token)
    const medium_tracks = useGetStats('tracks', 'medium_term', token)
    const long_tracks = useGetStats('tracks', 'long_term', token)
    const short_artists = useGetStats('artists', 'short_term', token)
    const medium_artists = useGetStats('artists', 'medium_term', token)
    const long_artists = useGetStats('artists', 'long_term', token)

    return [
        short_tracks,
        medium_tracks,
        long_tracks,
        short_artists,
        medium_artists,
        long_artists,
    ];
}

export default useGetAllStats;