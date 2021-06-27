import React from 'react';
import BlogItem from './BlogItem';



const BlogList = (props) => {
  return <div>
    {props.posts.map((post, index) => {
      return (
        <BlogItem key={index} text={post.text} image={post.image} author={post.author}
          created={post.created_at} updated={post.updated_at} likes={post.likes} />
      )
    })}
  </div>
}

export default BlogList;
