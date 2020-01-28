import React, { Component } from 'react';
import SongList from '../components/SongList';
import './ChartBox.css'

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
          <div className="chart-box">
            <h1 color="white">UK TOP 20</h1>
            <SongList songs = {this.state.songs}></SongList>
          </div>
        )
    }
}

export default ChartBox;
