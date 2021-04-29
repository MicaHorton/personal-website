import React, { Component } from 'react';
import styles from '../styles/single.module.css';

export default class Single extends Component {
    render() {
        return (
            <main>
                <div className={styles.box} 
                dangerouslySetInnerHTML={{ __html: this.props.post.sanatizedHtml }} />         
            </main>
        );
    }
}
