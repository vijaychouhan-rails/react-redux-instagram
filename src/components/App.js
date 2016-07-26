import React from 'react';
import Header from '../containers/Header';
import Errors from '../containers/Errors';
import Loader from '../containers/Loader';
import '../styles/loader.css';

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
