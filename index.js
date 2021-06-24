import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import persons from './src/Item';
import BlogPage from './src/BlogPage';





class App extends Component {
  render() {
    return (
      <div>
        <BlogPage friends={persons} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);