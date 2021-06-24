import React from 'react';
import BlogList from './BlogList';


const BlogPage = (props) => {
  return <div>
    My Blog List:
    <BlogList persons={props.friends} />
  </div>
}

export default BlogPage;