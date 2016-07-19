import React from 'react';

const Photo = React.createClass({
  render() {
    const post = this.props.post;
    return(
      <div>
        <p>{post.caption}</p>
        <p>{post.likes}</p>
        <hr/>
      </div>
    )
  }
});

export default Photo;
