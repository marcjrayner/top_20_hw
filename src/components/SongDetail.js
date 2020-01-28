import React, { Component } from 'react';
import './SongDetail.css'

 const SongDetail = ({artist,title,imageUrl,audioUrl}) => {

    return (
    <li>
        <h4>{title}</h4>
        <img src={imageUrl}></img>
        <audio controls >
            <source src={audioUrl} type="audio/mpeg"></source>
            </audio>
    </li>
    )
}

export default SongDetail;
