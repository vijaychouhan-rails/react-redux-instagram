import { LIKE_POST, LOAD_LIKES } from '../actions';
export default function modal(state = [], action) {
  switch(action.type) {
    case LIKE_POST:
      console.log("Like post");
      console.log(action)
      return [...state, {post_id: action.post.id, user_id: 1111}]
    case LOAD_LIKES:
      return [...state, ...action.likes]
    default:
      return state;
  }
}
