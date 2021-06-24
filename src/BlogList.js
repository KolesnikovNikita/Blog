import React from 'react';
import BlogItem from './BlogItem';


const BlogList = (props) => {
  return <div>
    {props.persons.map((man, index) => {
      return (
        <BlogItem key={index} id={man.id} text={man.text} src={man.image.src} width={man.image.width} height={man.image.height} />
      )
    })}
  </div>
}

export default BlogList;