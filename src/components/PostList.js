import React from 'react';
import PostPartial from './_Post';

const Posts = React.createClass({
  render() {
    const _this = this;

    function countLikes(post){
      if(_this.props.likes==undefined){
        return 0
      }
      return _this.props.likes.filter(function(obj){return obj.post_id==post.id}).length
    }
    
    var result = (this.props.posts != undefined) ? 
                   (this.props.posts.map(function(post, index){
                     return <PostPartial key={index} post={post} onLikeFunction={(post) => _this.props.onLikeFunction(post)} countLikes={(post) => countLikes(post)} />
                   })) : 'Load the the content click on button'
    
    return (
      <div>
        <button className='clickHere' onClick={() => this.props.onClickFunction() }>Refresh</button>
        <div>
          { result }
        </div>
      </div>
    )
  }

});

export default Posts;
