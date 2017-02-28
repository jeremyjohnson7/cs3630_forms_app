import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import FormView from './FormView';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/search" component={FormView} />
        </Route>
    </Router>,
    document.getElementById('root')
);
