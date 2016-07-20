import request from 'superagent';
import { browserHistory } from 'react-router';

export const REQUEST_GIFS = 'REQUEST_GIFS';
const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const POST_LIST = 'POST_LIST';

export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export function requestGifs(term = null) {
  const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);

  return {
    type: REQUEST_GIFS,
    payload: data
  }
}

export function openModal(gif) {
  return {
    type: OPEN_MODAL,
    gif
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function postList() {
  return {
    type: POST_LIST
  }
}

export function loadList() {
  const data = request.get("http://localhost:3000/mytestpost");
  console.log(data)
  return {
    type: 'LOAD_POST_LIST',
    payload: data
  }
}

export function signInUser()
{
  browserHistory.push('/favorites');
  return{
    type: SIGN_IN_USER
  }
}

export function signOutUser()
{
  return{
    type: SIGN_OUT_USER
  } 
}
