import React from 'react';
import PostPartial from './_Post';

const Posts = React.createClass({
  render() {
    console.log("this.props.posts");
    console.log(this.props);
    console.log(this.props.posts != undefined)
    const _this = this;
    var result = (this.props.posts != undefined) ? 
                   (this.props.posts.map(function(post, index){
                     return <PostPartial key={index} post={post} onLikeFunction={(post) => _this.props.onLikeFunction(post)} />
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
