import React from 'react';
import ReactDOM from 'react-dom';
import posts from './src/Item';
import BlogPage from './src/BlogPage';





const App = () => {
  return <div>
    <BlogPage items={posts} />
  </div>
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
