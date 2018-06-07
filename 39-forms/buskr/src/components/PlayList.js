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
    // console.log('clicked')
    // console.log('this', this)

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
      // console.log('setstate', this.state)
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log('submit');
    // console.log(event.target)
    // console.log(event.target.name)
    // console.log(event.target.dataset.valueAnything)
    // this.setState(prevState => {
    //   songs: [ ...prevState.songs, { id: UUID(), name: prevState.value } ]
    // }, () => {
    //   console.log('after submit', this.state)
    // })

    const songs = [...this.state.songs, { id: UUID(), name: this.state.value }]

    this.setState({
      songs
    }, () => {
      console.log('after submit', this.state)
    })
  }

  handleChange = (event) => {
    console.log(event);
    console.log('state value', this.state.value)
    this.setState({
      value: event.target.value.toUpperCase()
    }, () => {
      console.log('after handleChange', this.state.value)
    })
  }

  render() {
    // console.log("render", this.state)
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
