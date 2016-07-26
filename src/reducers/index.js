import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import PostListReducer from './postList';
import AuthReducer from './auth';
import ErrorReducer from './errors';
import LikesReducer from './likes';
import LoaderReducer from './loader';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  gifs: GifsReducer,
  modal: ModalReducer,
  postList: PostListReducer,
  errors: ErrorReducer,
  likes: LikesReducer,
  isFetching: LoaderReducer
});

export default rootReducer;
