import React from 'react';
import Header from '../containers/Header';
import Errors from '../containers/Errors';
import Loader from '../containers/Loader';
import '../styles/app.css';
import '../styles/loader.css';
import '../styles/animate.min.css';
import '../styles/buttons.css';
import '../styles/cover.css';
//import '../styles/font-awesome.min.css';
import '../styles/forms.css';
import '../styles/timeline.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Errors />
        <Loader />
        {this.props.children}
      </div>
    );
  }
}
