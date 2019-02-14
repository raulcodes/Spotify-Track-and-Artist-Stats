import React, { useState, useEffect } from 'react'

const useGetState = (type, time_range, token) => {
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

export default useGetState