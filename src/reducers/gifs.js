import { REQUEST_GIFS } from '../actions';

const initialState =  {
  data: []
};

export default function gifs(state = [], action) {
  console.log("loading the state and action")
  console.log(state)
  console.log(action)
  console.log("End loading the state and action")
  switch (action.type) {
    case REQUEST_GIFS:
      return {
        ...state, data: action.payload.body.data
      };
    default:
      return state;
  }
}