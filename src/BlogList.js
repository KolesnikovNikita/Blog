import React from 'react';
import BlogItem from './BlogItem';


const BlogList = (props) => {
  return <div>
    {props.persons.map((post, index) => {
      return (
        <BlogItem key={index} text={post.text} image={post.image} />
      )
    })}
  </div>
}

export default BlogList;