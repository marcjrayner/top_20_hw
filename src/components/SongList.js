import React, { Component } from 'react';
import SongDetail from './SongDetail';

const SongList = ({songs}) => {

    // functions:*****************
    const songNodes = songs.map( song => {
        return(
            <SongDetail 
            artist={song["im:artist"].label}
            title={song.title.label}
            imageUrl={song["im:image"][2].label}
            ></SongDetail>
        )
    })


    // *****************

    return(
        <ol>    
        {songNodes}
        </ol>
    )
}

export default SongList;