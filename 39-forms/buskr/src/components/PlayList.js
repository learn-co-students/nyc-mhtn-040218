import React, { Component } from 'react'
import UUID from 'uuid'

class PlayList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [
        {
          id: UUID(),
          name: "I will always love you"
        },
        {
            id: UUID(),
          name: "I'll be there"
        },
        {
          id: UUID(),
          name: "I have nothing"
        }
      ]
    }
  }

  handleClick = () => {
    // console.log('clicked')
    console.log('this', this)

    // const song = this.state.songs.shift()
    // console.log("shift", this.state.songs.shift())
    // console.log('push', this.state.songs.push(song))
    // this.state.songs.push(this.state.songs.shift())

    // const songs = this.state.songs.slice(0);
    // this.setState({
    //   songs: songs.
    // })

    // this.setState({
    //   //songs: this.state.songs.push(this.state.songs.shift())
    //   songs: [...this.state.songs.slice(1), this.state.songs[0]]
    // }, () => {
    //   console.log('setstate', this.state)
    // })
    this.setState(pState => {
      //songs: this.state.songs.push(this.state.songs.shift())
      return {
        songs: [...pState.songs.slice(1), pState.songs[0]]
      }
    }, () => {
      console.log('setstate', this.state)
    })
  }

  render() {
    console.log("render", this.state)
    return (
      <div className="songlist">
        <h4>Songs</h4>

        <ol>
          {this.state.songs.map((song, index) => {
            return (
              <li key={song.id}><i>{song.name}</i></li>
            )
          } )}
        </ol>

        <button onClick={this.handleClick}>Play Next</button>
      </div>
    )
  }
}

export default PlayList
