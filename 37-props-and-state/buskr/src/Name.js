import React from 'react'

// const Name = (props) => {
const Name = ({ name, nickname }) => {
  // const { name, nickname } = props;
  // console.log("props", props)

  const superName = name + ' ' +  nickname;
  // return (
  //   React.createElement(....) => { type, props, .... }
  //   React.createElement(.....) => { type, props, .... }
  // )

  return (
    <React.Fragment>
      <h2>{superName}</h2>
      <p>{name}</p>
      <h5>{nickname}</h5>
    </React.Fragment>
  )
}

export default Name
