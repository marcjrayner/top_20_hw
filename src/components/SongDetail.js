import React, { Component } from 'react';

 const SongDetail = ({artist,title,imageUrl,audioUrl}) => {
    
    return (
    <li>
        {/* <h1>{artist}</h1> */}
        <h2>{title}</h2>
        <img src={imageUrl}></img>
        <audio controls >
            <source src={audioUrl} type="audio/mpeg"></source>
            </audio>



    </li>
    )
}

export default SongDetail;