import React from 'react';
import Image from './Image';
import TextBox from './TextBox';

const BlogItem = (props) => {
  return (
    <div>
      <Image src={props.src} width={props.width} height={props.height} />
      <TextBox text={props.text} />
    </div>
  )
}

export default BlogItem;