import React from 'react';
import GifsTemp from '../components/GifsTemp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import GifList from '../../components/GifList';
import GifModal from '../../components/GifModal';
import SearchBar from '../../components/SearchBar';
import PostList from '../../components/PostList';
import '../styles/app.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
        <GifList gifs={ this.props.gifs } onGifSelect={ selectedGif => this.props.actions.openModal({selectedGif}) } />
        <GifModal modalIsOpen={ this.props.modalIsOpen }
                  selectedGif={ this.props.selectedGif }
                  onRequestClose={ () => this.props.actions.closeModal() } />
        <PostList onClickFunction={this.props.actions.loadList} posts={ this.props.posts }/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("===mapStateToProps====")
  console.log(state)
  console.log("END===mapStateToProps====")
  return {
    gifs: state.gifs.data,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.selectedGif,
    posts: state.post_list.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
