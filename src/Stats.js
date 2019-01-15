import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert'
import { Redirect } from "react-router";
import Select from 'react-select';

const typeOptions = [
    { state: 'type', value: 'tracks', label: 'tracks' },
    { state: 'type', value: 'artists', label: 'artists' }
];

const timeOptions = [
    { state: 'time', value: 'short', label: '4 weeks' },
    { state: 'time', value: 'medium', label: '6 months' },
    { state: 'time', value: 'long', label: 'couple of years' }
];

const limitOptions = [
    { state: 'limit', value: '1', label: 1 },
    { state: 'limit', value: '5', label: 5 },
    { state: 'limit', value: '10', label: 10 },
    { state: 'limit', value: '20', label: 20 },
    { state: 'limit', value: '30', label: 30 },
    { state: 'limit', value: '40', label: 40 },
    { state: 'limit', value: '50', label: 50 },
]

class Stats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            access_token: '',
            state: '125',
            auth_validity: 'loading',
            type: 'tracks',
            time: 'short',
            limit: 10,
            short_tracks: [],
            medium_tracks: [],
            long_tracks: [],
            short_artists: [],
            medium_artists: [],
            long_artists: []
        }

        this.getHashParameter = this.getHashParameter.bind(this);
        this.getStats = this.getStats.bind(this);
        this.loadStats = this.loadStats.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getHashParameter = (name) => {
        var matches = window.location.hash.match(new RegExp(name + '=([^&]*)'));
        return matches ? matches[1] : null;
    }

    /* Available types: tracks, artists
       Available time_ranges: short_term, medium_term, long_term
    */
    getStats = (type, time_range) => {
        return fetch(`https://api.spotify.com/v1/me/top/${type}?limit=50&time_range=${time_range}`, {
            headers: {
                'Authorization': 'Bearer ' + this.state.access_token
            }
        })
        .then(response => response.json())
        .then(resp => resp.items)
    }

    loadStats = () => {
        this.getStats('tracks', 'short_term').then(tracks => {
            this.setState({ short_tracks: tracks })
        })
        this.getStats('tracks', 'medium_term').then(tracks => {
            this.setState({ medium_tracks: tracks })
        })
        this.getStats('tracks', 'long_term').then(tracks => {
            this.setState({ long_tracks: tracks })
        })
        this.getStats('artists', 'short_term').then(artists => {
            this.setState({ short_artists: artists })
        })
        this.getStats('artists', 'medium_term').then(artists => {
            this.setState({ medium_artists: artists })
        })
        this.getStats('artists', 'long_term').then(artists => {
            this.setState({ long_artists: artists })
        })
    }

    createPlaylist = () => {
        let track_uris = []
        let playlist_name = ''
        let playlist_description = ''
        this.state[`${this.state.time}_${this.state.type}`].slice(0,this.state.limit).forEach(track => {
            track_uris.push(track.uri)
        })
        switch (this.state.time) {
            case 'short':
                playlist_name = 'Short Term Top Ten'
                playlist_description = "This is a playlist of your top ten tracks in the last four weeks."
                break;
            case 'medium':
                playlist_name = "Medium Term Top Ten"
                playlist_description = "This is a playlist of your top ten tracks in the last six months."
                break;
            case 'long':
                playlist_name = 'Long Term Top Ten'
                playlist_description = 'This is a playlist of your top ten tracks in the last few years.'
                break;
            default:
        }

        // GET current user's id
        fetch('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': 'Bearer ' + this.state.access_token
            }
        })
        .then(response => {
            if(response.ok) {
                console.log('got user\'s id')
                return response.json()
            }
            throw new Error('Error getting user settings');
        })
        .then(response => response.id)
        .then(id => {
            // Create empty playlist with appropriate name and description
            return fetch(`https://api.spotify.com/v1/users/${id}/playlists`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + this.state.access_token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'name': playlist_name,
                    'description': playlist_description
                })
            })
        })
        .then(response => {       
            if(response.ok) {
                console.log('Created empty playlist')
                return response.json()
            }
            throw new Error('Error creating playlist');
        })
        .then(response => response.id)
        .then(id => {
            // Add tracks to playlist
            return fetch(`https://api.spotify.com/v1/playlists/${id}/${this.state.type}`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + this.state.access_token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "uris": track_uris })
            })
        })
        .then(response => {       
            if(response.ok) {
                this.props.alert.success(`Successfully created playlist ${playlist_name}`)
                return response.json()
            }
            throw new Error('Error adding tracks to playlist');
        })
        .catch(error => {
            this.props.alert.error('Encountered problems making a playlist:', error.message)
            console.log('Encountered problems making a playlist:', error.message)
        })
    }

    handleChange = (selectedOption) => {
        console.log(selectedOption)
        this.setState({ [selectedOption.state]: selectedOption.value })
    }

    componentDidMount() {
        if (((this.state.auth_validity === 'valid') || (this.state.state === this.getHashParameter('state'))) && 
            (this.getHashParameter('access_token') || (this.state.access_token !== ''))) {
            this.setState({ 
               auth_validity: 'valid',
               access_token: this.getHashParameter('access_token')
            }, this.loadStats)
            // window.location.hash = '';
        }
    }

    render() {
        const { selectedTypeOption } = this.state;
        const { selectedTimeOption } = this.state;
        const { selectedLimitOption } = this.state;
    
        return(
            <Fragment>
                {(this.state.auth_validity === 'invalid') ? 
                    <Redirect to='/'/> 
                    :
                    <div>
                        <p>Your top 
                            <Select value={selectedLimitOption}
                                    onChange={this.handleChange}
                                    options={limitOptions}
                                    placeholder='10' />
                            <Select value={selectedTypeOption}
                                    onChange={this.handleChange}
                                    options={typeOptions}
                                    placeholder='tracks' />
                        for the past 
                            <Select value={selectedTimeOption}
                                    onChange={this.handleChange}
                                    options={timeOptions}
                                    placeholder="4 weeks" />
                            </p>
                        <ol>
                            {this.state[`${this.state.time}_${this.state.type}`].slice(0,this.state.limit).map((item, index) => 
                                <li>{item.name}</li>
                            )}
                        </ol>
                        <div>
                            {(this.state.type === 'tracks') ? 
                                <button onClick={this.createPlaylist}>Create a playlist from these tracks</button> 
                                : <p></p>}
                        </div>
                    </div> 
                }
            </Fragment>
        );
    }
}

export default withAlert(Stats);