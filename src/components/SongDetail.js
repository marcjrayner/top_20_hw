import React, { Component } from 'react';

const SongDetail = ({artist,title,imageUrl}) => {
    return (
    <li>
        <h1>{artist}</h1>
        <h2>{title}</h2>
        <img src={imageUrl}></img>
    </li>
    )
}

export default SongDetail;