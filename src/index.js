import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './components/App';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Favorites from './containers/Favorites';
import RequireAuth from './containers/RequireAuth';
import Demo from './components/Demo';

import Posts from './components/PostList';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="signup" component={Signup} />
        <Route path="login" component={Login} />
        <Route path="favorites" component={RequireAuth(Favorites)} />
        <Route path="posts" component={RequireAuth(Posts)} />
        <Route path="demo" component={Demo} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
