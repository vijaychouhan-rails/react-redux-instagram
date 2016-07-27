import React from 'react';

const Photo = React.createClass({
  render() {
    const post = this.props.post;
    return(
      <div className="box box-widget">
        <div className="box-header with-border">
          <div className="user-block">
            <img className="img-circle" src="./img/guy-5.jpg" alt="User Image" />
            <span className="username"><a href="#">John Breakgrow jr.</a></span>
            <span className="description">Shared publicly - 7:30 PM Today</span>
          </div>
        </div>
        <div className="box-body disBlock">
          <img src={post.display_src} width={300} height={300} mode='fit' className="img-responsive show-in-modal" alt={post.title}/>
          <p>{post.title}</p>
          <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>
          <button type="button" className="btn btn-default btn-xs" onClick={() => this.props.onLikeFunction(post)}><i className="fa fa-thumbs-o-up"></i> Like</button>
          <span className="pull-right text-muted">{this.props.countLikes(post)} likes - 3 comments</span>
        </div>
        <div className="box-footer box-comments disBlock">
          <div className="box-comment">
            <img className="img-circle img-sm" src="./img/guy-5.jpg" alt="User Image" />
            <div className="comment-text">
              <span className="username">
              Maria Gonzales
              <span className="text-muted pull-right">8:03 PM Today</span>
              </span>
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
            </div>
          </div>
          <div className="box-comment">
            <img className="img-circle img-sm" src="./img/guy-5.jpg" alt="User Image" />
            <div className="comment-text">
              <span className="username">
              Luna Stark
              <span className="text-muted pull-right">8:03 PM Today</span>
              </span>
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
            </div>
          </div>
        </div>
        <div className="box-footer disBlock">
          <form action="#" method="post">
            <img className="img-responsive img-circle img-sm" src="./img/guy-5.jpg" alt="Alt Text" />
            <div className="img-push">
              
            </div>
          </form>
        </div>
      </div>

    )
  }

});

export default Photo;
