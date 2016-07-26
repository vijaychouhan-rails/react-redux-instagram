import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class Loader extends React.Component {

  loader() {
    if (this.props.isFetching) {
      return(
        <div className='loading'></div>
      )
    } else {
      return (null)
    }
  }

  render() {
    return (
      this.loader()
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, Actions)(Loader);
