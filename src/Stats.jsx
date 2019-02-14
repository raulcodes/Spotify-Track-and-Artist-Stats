import React, { useState, useEffect, Fragment } from 'react';
import { withAlert } from 'react-alert'
import Select from 'react-select';

import useGetStats from './utils/hooks/getStats.jsx'
import ListItem from './Track'

import { typeOptions, timeOptions, limitOptions } from './utils/options.js'

const Stats = () => {
    const token = window.sessionStorage.getItem('spotify_token')
    const [items, setItems] = useState([])
    const [selectedLimitOption, setLimitOption] = useState({state: "limit", value: "10", label: 10})
    const [selectedTimeOption, setTimeOption] = useState({state: "time", value: "short", label: "4 weeks"})
    const [selectedTypeOption, setTypeOption] = useState({state: "type", value: "tracks", label: "tracks"})

    const [limit, setLimit] = useState(10)
    const [time, setTime] = useState('short')
    const [type, setType] = useState('tracks')

    const short_tracks = useGetStats('tracks', 'short_term', token)
    const medium_tracks = useGetStats('tracks', 'medium_term', token)
    const long_tracks = useGetStats('tracks', 'long_term', token)
    const short_artists = useGetStats('artists', 'short_term', token)
    const medium_artists = useGetStats('artists', 'medium_term', token)
    const long_artists = useGetStats('artists', 'long_term', token)

    const handleLimitChange = (selectedOption) => {
        console.log(selectedOption)
        setLimit(selectedOption.label)
        setLimitOption(selectedOption)
    }
    const handleTypeChange = (selectedOption) => {
        console.log(selectedOption)
        setType(selectedOption.value)
        setTypeOption(selectedOption)
    }
    const handleTimeChange = (selectedOption) => {
        console.log(selectedOption)
        setTime(selectedOption.value)
        setTimeOption(selectedOption)
    }

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
        <Fragment>
            <div>
                <p>Your top</p>
                    <Select value={selectedLimitOption}
                            onChange={handleLimitChange}
                            options={limitOptions}
                            placeholder='10' />
                    <Select value={selectedTypeOption}
                            onChange={handleTypeChange}
                            options={typeOptions}
                            placeholder='tracks' />
                <p>for the past</p>
                    <Select value={selectedTimeOption}
                            onChange={handleTimeChange}
                            options={timeOptions}
                            placeholder="4 weeks" />
                <ol>
                    {items.map((i, key) => 
                        <ListItem k={key} item={i} />
                    )}
                </ol>
            </div> 
        </Fragment>
    );
}

export default Stats