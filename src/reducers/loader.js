export default function modal(state = false, action) {
  switch(action.type) {
    case 'LOADER':
      console.log("Calling Loader");
      console.log(action)
      return action.isFetching
    default:
      return state;
  }
}
