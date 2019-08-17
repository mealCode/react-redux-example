import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends Component {

    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="mini ui button primary"
                            onClick={() => this.props.selectSong(song)}
                            >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }
   
    render() { 
        return ( 
            <div className="ui divided list">
                {this.renderList()}
            </div>
         );
    }
}

// fetch state - default convention name, this can be changed
// can be called in other component as this.props === {songs: state.songs}
const mapStateToProps = (state) => {
    return { songs: state.songs };
}

// connect() automatically call dispatch()
export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);