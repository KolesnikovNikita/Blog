import React from 'react';
import Image from './Image';
import TextBox from './TextBox';
import LikesCounter from './Likes';
import moment from 'moment';
import PropTypes from 'prop-types';

const BlogItem = (props) => {
  const { src, width, height } = props.image;
  return (
    <div>
      <Image src={src} width={width} height={height} />
      <TextBox text={props.text} author={props.author} /> <br />
      {moment(props.created).format('YYYY.MM.DD')} <br />
      {moment(props.updated).format('YYYY.MM.DD')}
      <LikesCounter count={props.likes} />
    </div>
  )
}

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

TextBox.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
};

LikesCounter.propTypes = {
  count: PropTypes.number
};

export default BlogItem;