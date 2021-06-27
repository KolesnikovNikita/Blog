import React from 'react';

const TextBox = (props) => {
  return <div>
    <span>Inside we are all the same! {props.text} <br /> {props.author}</span> <br />
  </div>
}

export default TextBox;

