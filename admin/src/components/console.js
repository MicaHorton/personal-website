import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../api';

const Post = props => (
    <article className='post'>
        <Link to={{pathname: 'edit/' + props.post._id}}>
            {props.post.title}
        </Link>
    </article>
)

export default class Console extends Component {
    constructor (props) {
        super(props);
        this.state = { posts: null };
    }

    componentDidMount() {
        getAllPosts()
        .then(posts => this.setState({ posts: posts }))
        .catch(err => console.log(err))
    }

    listPosts = () => {
        return this.state.posts.map(current => {
            return <Post post={current} key={current._id}/>;
        })

    }

    render() {
        if (this.state.posts) {
            return (
                <main>
                    <h1 className='console-header'>Mica's Admin Console</h1>
                    {this.listPosts()}
                    <Link to={{pathname: '/add'}} className='button add-button'>Add New Post</Link>
                </main>
            )
        }
        return null;

    }
}

