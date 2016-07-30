export default function modal(state = {totalItem: 0, activeItem: 0}, action) {
  switch(action.type) {
    case 'CHANGE_PAGE_NUMBER':
      console.log("Calling pagination ChangePageNumber");
      console.log(action.activeItem)
      //return { ...state, activeItem: action.activeItem }
      return Object.assign({}, state, {
        activeItem: action.activeItem, totalItem: action.totalItem
      })
    default:
      return state;
  }
}
