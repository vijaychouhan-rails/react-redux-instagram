import React from 'react';

const Photo = React.createClass({
  render() {
    const post = this.props.post;
    return(
      <div className='col-md-3'>
        <div className='col-md-11 post'>
          <img src={post.display_src} width={300} height={300} mode='fit' className="img-responsive" alt={post.caption}/>
          <p>{post.caption}</p>
          <span className="likePost">{post.likes}</span> 
          <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true" onClick={() => this.props.onLikeFunction(post)}></span>
        </div>
        <div className='col-md-1'/>
      </div>
    )
  }
});

export default Photo;
