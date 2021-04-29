import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/navbar.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Blog from "./components/blog.js";
import Single from './components/single.js';
import Contact from './components/contact.js';
import { getAllPosts } from './api.js';


const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts()
        .then(posts => {
            setPosts(posts);
        })
        .catch(err => console.log(err))

    }, []);

    console.log('POSTS', posts);

    return (
        <BrowserRouter>
            <Navbar exact path='/' />
            <Route exact path='/' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/blog'>
                <Blog posts={posts}/>
            </Route>
            <Route exact path='/blog/:id' component={Single}/>
            <Route exact path='/contact' component={Contact} />
        </BrowserRouter>
    );
}

export default App;


/*
<Route exact path='/blog/:id' render={(props) => {
    let id = props.match.params.id;
    let post = posts.filter(x => x._id === id)[0];
    return <Single post={post}/>;
}}/>
*/
