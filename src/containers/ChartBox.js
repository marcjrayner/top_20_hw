import React, { Component } from 'react';
import SongList from '../components/SongList';

class ChartBox extends Component{

    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }

    }
        
        // functions **********************
        componentDidMount(){
            const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
            
            fetch(url)
            .then(res => res.json())
            .then(feed => this.setState({songs: feed.feed.entry}))
            .catch(err => console.log(err)
            )
            console.log(this.songs);
            
        }
        



    // **********************
    

    render(){
        return(
            <SongList songs = {this.state.songs}></SongList>
        )
    }
}

export default ChartBox;