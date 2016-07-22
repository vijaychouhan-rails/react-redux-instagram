import request from 'superagent';
import { browserHistory } from 'react-router';

export const REQUEST_GIFS = 'REQUEST_GIFS';
const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const POST_LIST = 'POST_LIST';
export const SHOW_ERROR = 'SHOW_ERROR';

export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const LIKE_POST = 'LIKE_POST';
export const LOAD_POST_LIST = 'LOAD_POST_LIST';

export function requestGifs(term = null) {
  return function(dispatch) {
    request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`).then(response => {
      dispatch({
        type: REQUEST_GIFS,
        payload: response
      });
    });
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
  return function(dispatch){
    console.log("loadList data thunk calling");
    const url = "http://localhost:3000/mytestpost";
    fetch(url)
      .then(function(response){
        return(response.json());
      })
      .then(function(data){
        console.log("data")
        console.log(data.posts)
        dispatch({
          type: 'LOAD_POST_LIST',
          posts: data.posts
        })
      })
      .catch(function(error){
        console.log("Opps...", "Could not fetch in loadList" + error);
      })
  }
}

export function signInUser(values)
{
  return function(dispatch){
    console.log("values")
    var formData = new FormData();

    formData.append("email", values.email);
    formData.append("password", values.password);
    var request = new Request('http://localhost:3000/login', {
      method: 'POST', 
      mode: 'cors', 
      redirect: 'follow',
      body: formData
    });

    fetch(request)
      .then(function(response){
        console.log("response")
        return(response.json());
      })
      .then(function(result){
        console.log("result")
        if(result.success){
          localStorage.setItem('auth_token', result.auth_token)
          dispatch({ type: SIGN_IN_USER } )
          browserHistory.push('/favorites')  
        }else{
          dispatch({ type: SIGN_IN_ERROR, errors: result.errors } ) 
          dispatch( showError(result.errors) ) 
        }
        
      })
      .catch(function(error){
        console.log("Opps...", "Could not fetch" + error);
      })
  }
}

export function signOutUser()
{
  localStorage.clear();
  browserHistory.push('/login');
  return{
    type: SIGN_OUT_USER
  } 
}

export function showError(message) {
  return {
    type: SHOW_ERROR,
    messages: message
  }
}

export function likePost(post) {
  console.log("=============================")
  console.log(post)
  return {
    type: LIKE_POST,
    post: post
  }
}
