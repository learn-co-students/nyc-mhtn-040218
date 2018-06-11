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
      ],
      value: ""
    }
  }

  handleClick = () => {
    this.setState(pState => {
      return {
        songs: [...pState.songs.slice(1), pState.songs[0]]
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const songs = [...this.state.songs, { id: UUID(), name: this.state.value }]
    this.setState({
      songs
    })
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value.toUpperCase()
    })
  }

  render() {
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

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="songRequest"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add Song Request Button Submit" />
          <button data-value-anything="asdfasdfadsf" aria-label="whatever" name="b" onClick={this.handleSubmit}>Super Button!</button>
        </form>
      </div>
    )
  }
}

export default PlayList
