import React from 'react';

export default function DisplayChars(props) {
  return (
    <>
      {props.chars.map((char) => (
        <div
          key={char.name}
          style={{
            border: '2px solid #B02E0C',
            borderRadius: '4px',
            padding: '1rem',
            margin: '.5rem',
            background: 'white',
          }}
        >
          <h1>{char.name}</h1>
        </div>
      ))}
    </>
  );
}
