import React from "react";

const Venue = props => {
  return (
    <p>
      Where: <i>{props.children}</i>
    </p>
  );
};

export default Venue;
