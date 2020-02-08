import React, { useState, useEffect } from 'react';

import useGetAllStats from '../../utils/hooks/getStats'
import TrackList from '../TrackList/TrackList';
import Selection from '../Selection/Selection';

const Stats = () => {
    const [items, setItems] = useState([])

    const [limit, setLimit] = useState(10)
    const [time, setTime] = useState('short')
    const [type, setType] = useState('tracks')

    const [
        short_tracks,
        medium_tracks,
        long_tracks,
        short_artists,
        medium_artists,
        long_artists,
    ] = useGetAllStats();

    useEffect(() => {
        let items = []
        short_tracks.slice(0, 10).map((track) =>
            items.push(track)
        )
        setItems(items)
    }, [short_tracks])

    useEffect(() => {
        let items = []
        switch (time) {
            case 'short':
                if (type === 'tracks') {
                    short_tracks.slice(0, limit).map((track) =>
                        items.push(track)
                    )
                } else {
                    short_artists.slice(0, limit).map((artist) =>
                        items.push(artist)
                    )
                } break
            case 'medium':
                if (type === 'tracks') {
                    medium_tracks.slice(0, limit).map((track) =>
                        items.push(track)
                    )
                } else {
                    medium_artists.slice(0, limit).map((artist) =>
                        items.push(artist)
                    )
                } break
            case 'long':
                if (type === 'tracks') {
                    long_tracks.slice(0, limit).map((track) =>
                        items.push(track)
                    )
                } else {
                    long_artists.slice(0, limit).map((artist) =>
                        items.push(artist)
                    )
                } break
            default:
                items.push('something went wrong!')
        }
        setItems(items)
    }, [limit, time, type])

    return(
        <>
            <div>
                <Selection
                    setLimit={setLimit}
                    setTime={setTime}
                    setType={setType}
                />
                <TrackList items={items} />
            </div> 
        </>
    );
}

export default Stats