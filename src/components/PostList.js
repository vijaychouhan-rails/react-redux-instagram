import React from 'react';
var FontAwesome = require('react-fontawesome');
import PostPartial from './_Post';
import { Link } from 'react-router';
import { Pagination } from 'react-bootstrap';

const Posts = React.createClass({

  componentDidMount: function() {
    console.log("paginate")
    this.props.actions.loadList()
  },

  render() {
    const _this = this;

    function handlePagination(event) {
      console.log("this is eventKey")
      console.log(event)
      _this.props.actions.loadList(event)
    }


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
      <div className="container page-content">
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={this.props.paginate.totalItem}
          maxButtons={5}
          activePage={this.props.paginate.activeItem}
          onSelect={(event) => handlePagination(event)} />

        <button className='clickHere' onClick={() => this.props.onClickFunction() }>Refresh</button>
        <div className="row">
          <div className="col-md-3">
            <div className="profile-nav">
              <div className="widget">
                <div className="widget-body">
                  <div className="user-heading round">
                    <a href="#">
                    <img src="./img/guy-5.jpg" alt="" />
                    </a>
                    <h1>John Breakgrow</h1>
                    <p>@username</p>
                  </div>
                  <ul className="nav nav-pills nav-stacked">
                    <li className="active"><a href="#"> <i className="fa fa-user"></i> News feed</a></li>
                    <li>
                      <a href="#"> 
                      <i className="fa fa-envelope"></i> Messages 
                      <span className="label label-info pull-right r-activity">9</span>
                      </a>
                    </li>
                    <li><a href="#"> <i className="fa fa-calendar"></i> Events</a></li>
                    <li><a href="#"> <i className="fa fa-image"></i> Photos</a></li>
                    <li><a href="#"> <i className="fa fa-share"></i> Browse</a></li>
                    <li><a href="#"> <i className="fa fa-floppy-o"></i> Saved</a></li>
                  </ul>
                </div>
              </div>
              <div className="widget">
                <div className="widget-body">
                  <ul className="nav nav-pills nav-stacked">
                    <li><a href="#"> <i className="fa fa-globe"></i> Pages</a></li>
                    <li><a href="#"> <i className="fa fa-gamepad"></i> Games</a></li>
                    <li><a href="#"> <i className="fa fa-puzzle-piece"></i> Ads</a></li>
                    <li><a href="#"> <i className="fa fa-home"></i> Markerplace</a></li>
                    <li><a href="#"> <i className="fa fa-users"></i> Groups</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box profile-info n-border-top">
                      <form>
                        <textarea className="form-control input-lg p-text-area" rows="2" placeholder="Whats in your mind today?"></textarea>
                      </form>
                      <div className="box-footer box-form">
                        <a href="#" className="btn btn-azure pull-right">
                        <i className="fa fa-refresh"></i>
                        Load more
                        </a>
                        <a href="#" className="btn btn-azure btn-block"><i className="fa fa-user-plus"></i> Follow</a>
                        <button type="button" className="btn btn-default center-block"><i className="fa fa-refresh"></i> Load more activities</button>
                        <a href="#" className="btn btn-azure">
                        <i className="fa fa-envelope"></i>
                        Send message
                        </a>
                        <button type="button" className="btn btn-azure pull-right">Post</button>
                        <ul className="nav nav-pills">
                          <li><a href="#"><i className="fa fa-map-marker"></i></a></li>
                          <li><a href="#"><i className="fa fa-camera"></i></a></li>
                          <li><a href="#"><i className=" fa fa-film"></i></a></li>
                          <li><a href="#"><i className="fa fa-microphone"></i></a></li>
                        </ul>
                      </div>
                    </div>

                    { result }
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="col-md-3">
          
            <div className="widget">
              <div className="widget-header">
                <h3 className="widget-caption">Friends activity</h3>
              </div>
              <div className="widget-body bordered-top bordered-sky">
                <div className="card">
                  <div className="content">
                    <ul className="list-unstyled team-members">
                      <li>
                        <div className="row">
                          <div className="col-xs-3">
                            <div className="avatar">
                              <img src="./img/guy-5.jpg" alt="img" className="img-circle img-no-padding img-responsive" />
                            </div>
                          </div>
                          <div className="col-xs-9">
                            <b><a href="#">Hillary Markston</a></b> shared a 
                            <b><a href="#">publication</a></b>. 
                            <span className="timeago" >5 min ago</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-xs-3">
                            <div className="avatar">
                              <img src="./img/guy-5.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                            </div>
                          </div>
                          <div className="col-xs-9">
                            <b><a href="#">Leidy marshel</a></b> shared a 
                            <b><a href="#">publication</a></b>. 
                            <span className="timeago" >5 min ago</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-xs-3">
                            <div className="avatar">
                              <img src="./img/guy-5.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                            </div>
                          </div>
                          <div className="col-xs-9">
                            <b><a href="#">Presilla bo</a></b> shared a 
                            <b><a href="#">publication</a></b>. 
                            <span className="timeago" >5 min ago</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-xs-3">
                            <div className="avatar">
                              <img src="./img/guy-5.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                            </div>
                          </div>
                          <div className="col-xs-9">
                            <b><a href="#">Martha markguy</a></b> shared a 
                            <b><a href="#">publication</a></b>. 
                            <span className="timeago" >5 min ago</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="widget">
              <div className="widget-header">
                <h3 className="widget-caption">People You May Know</h3>
              </div>
              <div className="widget-body bordered-top bordered-sky">
                <div className="card">
                  <div className="content">
                    <ul className="list-unstyled team-members">
                      <li>
                        <div className="row">
                          <div className="col-xs-3">
                            <div className="avatar">
                              <img src="./img/guy-5.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                            </div>
                          </div>
                          <div className="col-xs-6">
                            Carlos marthur
                          </div>
                          <div className="col-xs-3 text-right">
                            <btn className="btn btn-sm btn-azure btn-icon"><i className="fa fa-user-plus"></i></btn>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-xs-3">
                            <div className="avatar">
                              <img src="./img/guy-5.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                            </div>
                          </div>
                          <div className="col-xs-6">
                            Maria gustami
                          </div>
                          <div className="col-xs-3 text-right">
                            <btn className="btn btn-sm btn-azure btn-icon"><i className="fa fa-user-plus"></i></btn>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div className="col-xs-3">
                            <div className="avatar">
                              <img src="./img/guy-5.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                            </div>
                          </div>
                          <div className="col-xs-6">
                            Angellina mcblown
                          </div>
                          <div className="col-xs-3 text-right">
                            <btn className="btn btn-sm btn-azure btn-icon"><i className="fa fa-user-plus"></i></btn>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>

    )
  }

});

export default Posts;
