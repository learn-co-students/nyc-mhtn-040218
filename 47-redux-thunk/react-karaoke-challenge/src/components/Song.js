import React from 'react';

const Song = ({ title, singer, plays, playSong }) => {
  return (
    <tr className="song">
      <td>{title}</td>
      <td>{singer}</td>
      <td>{plays}</td>
      <td><button onClick={playSong}>Play</button></td>
    </tr>
  )
}

export default Song;
