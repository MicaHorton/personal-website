import React, { Component } from 'react';
import styles from '../styles/single.module.css';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const Post = props => (
    <>
    <div className={styles.box}>
        <h1>Title</h1>
        <p>{props.post.title}</p>
    </div>
    <div className={styles.box}>
        <h1>Post</h1>
        <p>Button will be here</p>
    </div>
    <div className={styles.box}>
        <h1>Tags</h1>
        <p>{props.post.tags}</p>
    </div>
      
    </>
  )
  

export default class Edit extends Component {
    constructor(props) {
        super(props);
     }

    getPost() {
        let post = this.props.location.state;
        return (
            <Post post={post} key={post._id} />
        )

    }
    
    render() {
        
        return (
            <>{this.getPost()}</>
        );
    }
}
