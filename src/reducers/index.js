import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import PostListReducer from './postList';
import AuthReducer from './auth';
import ErrorReducer from './errors';
import LikesReducer from './likes';
import LoaderReducer from './loader';
import PaginateReducer from './paginate';
import { reducer as FormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  gifs: GifsReducer,
  modal: ModalReducer,
  postList: PostListReducer,
  errors: ErrorReducer,
  likes: LikesReducer,
  isFetching: LoaderReducer,
  routing: routerReducer,
  paginate: PaginateReducer
});

export default rootReducer;
