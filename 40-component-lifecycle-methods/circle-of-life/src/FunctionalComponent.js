import React from 'react';

const FunctionalComponent = ({ name, color = 'black', children }) => {
  return (
    <div style={{ border: `1px solid ${color}`, margin: 10, textAlign: 'center' }}>
      <p style={{ color }}>{name}</p>
      {children}
    </div>
  );
}

export default FunctionalComponent;
