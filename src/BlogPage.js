import React from 'react';
import BlogList from './BlogList';


const BlogPage = (props) => {
  return <div>
    My Blog List:
    <BlogList posts={props.items} />
  </div>
}

export default BlogPage;