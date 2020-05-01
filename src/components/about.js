import React, { Component } from 'react';
import styles from '../styles/about.module.css';

export default class About extends Component {
  render() {
    return (
        <>
        <div className={styles.box}>
            <h1>Hi, I'm Mica</h1>

        </div>
        
        <div className={styles.box}>
            <h1>Coding Languages</h1>

        </div>
        </>
    );
  }
}