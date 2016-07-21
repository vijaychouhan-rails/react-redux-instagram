import { SIGN_IN_USER, SIGN_OUT_USER, SIGN_IN_ERROR } from '../actions';

const intitialState = {
  authenticated: localStorage.getItem('auth_token') ? true : false,
  errors: ''
}

export default function auth(state = intitialState, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return {
        ...state, authenticated: true
      };
    case SIGN_OUT_USER:
      return {
        ...state, authenticated: false
      };
    case SIGN_IN_ERROR:
      return {
        ...state, errors: action.errors 
      };
    default:
      return state;
  }
}
