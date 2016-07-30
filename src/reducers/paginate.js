export default function modal(state = {totalItem: 20, activeItem: 3}, action) {
  switch(action.type) {
    case 'CHANGE_PAGE_NUMBER':
      console.log("Calling pagination ChangePageNumber");
      console.log(action.activeItem)
      //return { ...state, activeItem: action.activeItem }
      return Object.assign({}, state, {
        activeItem: action.activeItem
      })
    default:
      return state;
  }
}
