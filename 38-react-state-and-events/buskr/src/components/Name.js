import React from 'react'

const Name = ({ name, nickname }) => {
  return (
    <React.Fragment>
      <h2>{name}</h2>
      <h5>aka: {nickname}</h5>
    </React.Fragment>
  )
}

export default Name
