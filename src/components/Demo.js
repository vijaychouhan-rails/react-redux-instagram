import React from 'react';
var FontAwesome = require('react-fontawesome');

const Demo = React.createClass({
  render(){
    return (
      <div className="container page-content">
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
                    
                    <div className="box box-widget">
                      <div className="box-header with-border">
                        <div className="user-block">
                          <img className="img-circle" src="./img/guy-5.jpg" alt="User Image" />
                          <span className="username"><a href="#">John Breakgrow jr.</a></span>
                          <span className="description">Shared publicly - 7:30 PM Today</span>
                        </div>
                      </div>
                      <div className="box-body disBlock">
                        <img className="img-responsive show-in-modal" src="img/Post/young-couple-in-love.jpg" alt="Photo" />
                        <p>I took this photo this morning. What do you guys think?</p>
                        <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share"></i> Share</button>
                        <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up"></i> Like</button>
                        <span className="pull-right text-muted">127 likes - 3 comments</span>
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

export default Demo;
