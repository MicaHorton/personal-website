import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../api';
import styles from '../styles/console.module.css';


const Post = props => (
    <div className={styles.post}>
        <Link to={{pathname: props.post._id}}>
            {props.post.title}
        </Link>
    </div>
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
                    {this.listPosts()}
                </main>
            )
        }
        return null;

    }
}

