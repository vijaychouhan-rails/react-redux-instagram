export default function modal(state = [], action) {
  switch(action.type) {
    case 'POST_LIST':
      return state;
    case 'LOAD_POST_LIST':
      return {...state, posts: action.payload.body.posts}; //not clear why body.post
    default:
      return state;
  }
}
