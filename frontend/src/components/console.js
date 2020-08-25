import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/console.module.css';
import axios from 'axios';

const Post = props => (
  <div className={styles.post}>
    <Link to={{pathname: '/admin/console/' + props.post._id, state: props.post}}>
      {props.post.title}
    </Link>
  </div>
)

export default class Console extends Component {
  constructor (props) {
    super(props);
    this.state = {posts:[]};
  }

  componentDidMount() {
    /* Development: http://localhost:5000/projects */
    /* Production: https://api-dot-personal-website-279319.wl.r.appspot.com/projects */

    axios.get('https://api-dot-personal-website-279319.wl.r.appspot.com/projects') 
        .then(response => {
            this.setState({ posts: response.data });
            console.log('Got a response!', this.state.posts);
        })
        .catch((error) => {
            console.log(error);
         })
  }

  listPosts() {
    return this.state.posts.map(current => {
        console.log('List all was run')
        return <Post post={current} key={current._id}/>;
    })
  }

  render() {
    let content;
    content = this.listPosts();

    return (
      <div className={styles.all}>
        <div className={styles.header}><h1>Edit Blog</h1></div>
        <p>{content}</p>
      </div>

    );
  }
}

