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
export const LOAD_LIKES = 'LOAD_LIKES';

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

export function loadList(page=1) {
  return function(dispatch){
    dispatch({
      type: 'LOADER',
      isFetching: true
    })
    const url = "http://localhost:3000/posts?page=" + page;
    fetch(url)
      .then(function(response){
        return(response.json());
      })
      .then(function(data){
        dispatch({
          type: 'LOAD_LIKES',
          likes: data.likes
        })
        
        dispatch({
          type: 'LOAD_POST_LIST',
          posts: data.posts,
          total_post: data.total_post
        })

        dispatch({
          type: 'CHANGE_PAGE_NUMBER',
          activeItem: page
        })

        dispatch({
          type: 'LOADER',
          isFetching: false
        })

      })
      .catch(function(error){
        dispatch({
          type: 'LOADER',
          isFetching: false
        })
        console.log("Opps...", "Could not fetch in loadList" + error);
      })
  }
}

export function signInUser(values)
{
  return function(dispatch){
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
        return(response.json());
      })
      .then(function(result){
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
  return function(dispatch){
    const url = ('http://localhost:3000/'+post.id+'/likes')
    var request = new Request(url, {
      method: 'POST', 
      mode: 'cors', 
      redirect: 'follow'
    });

    fetch(request)
      .then(function(response){
        return(response.json());
      })
      .then(function(result){
        if(result.success){
          dispatch({type: LIKE_POST, post: post })
        }else{
          console.log("Error", "Could not update like count");
        }
      })
      .catch(function(error){
        console.log("Opps...", "Could not update like count" + error);
      })

    }
}
