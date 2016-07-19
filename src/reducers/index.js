import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import PostListReducer from './postList';

const rootReducer = combineReducers({
  gifs: GifsReducer,
  modal: ModalReducer,
  post_list: PostListReducer
});

export default rootReducer;
