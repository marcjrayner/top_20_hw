import React, { Component } from 'react';
import SongDetail from './SongDetail';
import './SongList.css';

const SongList = ({songs}) => {

    const songNodes = songs.map( song => {
      return(
        <SongDetail
          title={song.title.label}
          imageUrl={song["im:image"][2].label}
          audioUrl={song.link[1].attributes.href}
          key={song.id.attributes["im:id"]}
        >
        </SongDetail>
        )
    });

    return(
        <ol className="ordered-list">
          {songNodes}
        </ol>
    );
}

export default SongList;
