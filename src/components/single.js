import React, { Component } from 'react';
import styles from '../styles/single.module.css';

export default class Single extends Component {
    constructor(props) {
        super(props);
     }

    getPost() {
        if (this.props.location.state) {
            return (
                <div className={styles.box}>
                    <h1>{this.props.location.state.title}</h1>
                    <p>{this.props.location.state.post}</p>
                </div>
            )
        } 
    }
    
    render() {
        return (
            <>{this.getPost()}</>
        );
    }
}

/* fix loading single JS first 
else {
            return (
                <p>undefined</p>
            )
        }
*/