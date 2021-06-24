import React from 'react';
import Image from './Image';
import TextBox from './TextBox';

const BlogItem = (props) => {
  const { src, width, height } = props.image;
  return (
    <div>
      <Image src={src} width={width} height={height} />
      <TextBox text={props.text} />
    </div>
  )
}

export default BlogItem;