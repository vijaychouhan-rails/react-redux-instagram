import React from 'react';
import Header from '../containers/Header';
import Errors from '../containers/Errors';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Errors />
        {this.props.children}
      </div>
    );
  }
}
