import React, { Component } from 'react';

class LikesCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count }
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <p>Likes: {this.state.count}</p>
        <button onClick={this.handleClick}>push me</button>
      </div>
    )
  }
}

LikesCounter.defaultProps = {
  count: 0
}

export default LikesCounter;