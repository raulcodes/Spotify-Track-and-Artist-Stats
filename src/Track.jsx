import React, { useEffect, useState } from 'react'

const ListItem = (props) => {
    console.log(props)
    return (
        <li id={props.k}>
            <div>
                {
                    (props.item.type === 'track') ?
                    <img height="150px" src={props.item.album.images[0].url} alt={props.item.name} />
                    :
                    <img height="150px" src={props.item.images[0].url} alt={props.item.name} />
                }
                <p>{props.item.name}</p>
            </div>
        </li>
    )
}

export default ListItem