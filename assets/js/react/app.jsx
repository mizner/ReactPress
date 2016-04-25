import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import About from './About';
import Posts from './Posts';
import PostContent from './PostContent';
import Home from './Home';
import ServerError from './ServerError';


class App extends Component {
    render() {
        return (
            <div>
                <header><h1>App</h1></header>
                <menu>
                    <ul className="nav nav-tabs">
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                        <li><Link to="/posts" activeClassName="active">Posts</Link></li>
                    </ul>
                </menu>
                {this.props.children}
            </div>
        );
    }
}


render((
    <Router history={createBrowserHistory()}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="posts" component={Posts}>
                <Route path="/post/:post_name" component={PostContent} />
            </Route>
            <Route path="error" component={ServerError} />
        </Route>
    </Router>
), document.getElementById('main'));