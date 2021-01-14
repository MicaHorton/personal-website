import React, { Component } from 'react';
import { getSinglePost } from '../api.js';
import styles from '../styles/single.module.css';

export default class Single extends Component {
    constructor(props) {
        super(props);
        this.state = { postId: this.props.match.params.id,
                       post: null };
     }

    componentDidMount() {
        getSinglePost(this.state.postId)
        .then(data => this.setState({ post: data.sanatizedHtml }))
        .catch(err => console.log(err))
    }

    
    render() {
        if (this.state.post) {
            return (
                <main>
                    <div className={styles.box} dangerouslySetInnerHTML={{ __html: this.state.post }} />         
                </main>
            );
        } 

        return null;
    }
}

