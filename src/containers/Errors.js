import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class Errors extends React.Component {
  renderErrorMessage() {
    return (<p> {this.props.errorMessages} :: { Math.random() } </p>)
  }

  render() {
    return (
      this.renderErrorMessage()
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessages: state.errors.messages
  }
}

export default connect(mapStateToProps, Actions)(Errors);
