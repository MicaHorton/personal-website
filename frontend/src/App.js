import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Blog from "./components/blog.js";
import Single from './components/single.js';
import Contact from './components/contact.js';
import { getAllPosts } from './api.js';

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = { posts: [] }
    }

    componentDidMount() {
        getAllPosts()
        .then(posts => {
            this.setState({ posts: posts });
            console.log('Posts fetched')
        })
        .catch(err => console.log(err))
    }


    render() {
        return (
            <Router>
                <Navbar exact path='/' />
                <Route exact path='/' component={About} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/blog'>
                    <Blog posts={this.state.posts}/>
                </Route>
                <Route exact path='/blog/:id' render={(props) => {
                    let id = props.match.params.id;
                    let post = this.state.posts.filter(x => x._id === id)[0];
                    return <Single post={post}/>;
                }}/>
                <Route exact path='/contact' component={Contact} />
            </Router>
           );
    }   
}



