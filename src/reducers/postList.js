import { POST_LIST, LOAD_POST_LIST, LIKE_POST } from '../actions';
export default function modal(state = {posts: []}, action) {
  switch(action.type) {
    case POST_LIST:
      return state;
    case LOAD_POST_LIST:
      return {...state, posts: action.posts};
    case LIKE_POST:
      let t = state.posts.map((obj, index) => {
        console.log("obj.code");
        console.log(obj.code);
        
        console.log("action.post.code")
        console.log(action)

        if (obj.code === action.post.code) {
          console.log("matched the record")
          return Object.assign({}, obj, {
            likes: (obj.likes + 1)
          })
        }
        return obj;
      })
      return {...state, posts: t};
    default:
      return state;
  }
}
