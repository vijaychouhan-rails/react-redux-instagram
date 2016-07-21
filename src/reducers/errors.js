import { SHOW_ERROR } from '../actions';

const intitialState = {
  messages: ''
}

export default function auth(state = intitialState, action) {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        ...state, messages: action.messages
      };
    default:
      return state;
  }
}
