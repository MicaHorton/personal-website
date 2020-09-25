import React, { Component } from 'react';
import styles from '../styles/edit.module.css';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


export default class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            post: '',
            tags: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {   
        const name = e.target.name; 
        const value = e.target.value;
        this.setState({
          [name]: value
        });   
        
      }

    

    handleSubmit(e) {
        e.preventDefault();
        const data = this.state;
        console.log(data);

  
    
    }

    
    render() {
        let post = this.props.location.state;
        
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label className={styles.formItem}>
                    Title
                    <input name='title' type='text' value={this.state.title} onChange={this.handleChange} required />
                </label>
                <label className={styles.formItem}>
                    Post
                    <textarea name='post' type='text' value={this.state.post} onChange={this.handleChange} required />
                </label>
                <label className={styles.formItem}>
                    Tags
                    <input name='tags' type='text' value={this.state.tags} onChange={this.handleChange} required />
                </label>

                <input className={styles.submit} type='submit' value='Submit' />
            </form>
        );
    }
}
