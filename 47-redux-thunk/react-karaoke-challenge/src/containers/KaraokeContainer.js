import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';
import { connect } from 'react-redux';

class KaraokeContainer extends Component {
  state = {
    // songs: [],
    // currentSong: null,
    title: "",
  }

  componentDidMount() {
    // fetch('http://localhost:4000/songs')
    //   .then(res => res.json())
    //   .then(json => this.setState({ songs: json }))
  }

  playSong = (id) => {
    const currentSong = this.props.songs.find(song => song.id === id);
    // this.setState({ currentSong });
    this.props.playSong(currentSong);

    // fetch(`http://localhost:4000/songs/${currentSong.id}`, {
    //   method: 'PATCH',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ ...currentSong, plays: currentSong.plays + 1 })
    // })
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log(json);
    //   })
  }

  updateTitle = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  filteredSongs = () => {
    return this.props.songs.filter(song => song.title.toLowerCase().includes(this.state.title.toLowerCase()));
  }

  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter title={this.state.title} handleChange={this.updateTitle} />
          <SongList songs={this.filteredSongs()} playSong={this.playSong} />
        </div>
        <KaraokeDisplay {...this.props.currentSong} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs,
    currentSong: state.currentSong,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    playSong: (song) => {
      dispatch({ type: "PLAY_SONG", payload: song })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KaraokeContainer);
