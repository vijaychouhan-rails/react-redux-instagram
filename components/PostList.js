import React from 'react';
import PostPartial from './_Post';

const Photos = React.createClass({
  render() {
    var result = (this.props.posts != undefined) ? 
                    (this.props.posts.map(function(post, index){
                      return <PostPartial key={index} post={post} />
                    })) : 'Load the the content click on button'
    
    return (
      <div>
        <h1>
          This is test element
        </h1>
        <button className='clickHere' onClick={() => this.props.onClickFunction()} >Click Here to Load Post</button>
        <div>
          { result }
        </div>
      </div>
    )
  }
});

export default Photos;
