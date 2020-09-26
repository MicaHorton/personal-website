import axios from 'axios';
import React, { Component } from 'react';
import styles from '../styles/edit.module.css';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;



export default class Edit extends Component {
    constructor(props) {
        super(props);
        let initial = this.props.location.state;

        this.state = {
            id: initial._id,
            title: initial.title,
            post: initial.post,
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
       
        axios.post('http://localhost:5000/projects/update/' + this.state.id, this.state, {withCredentials: true})
            .then(res => console.log(res.data)); 
        
        /*
        
        axios.post('http://localhost:5000/update' + item._id) 
        .then(response => {
            this.setState({ posts: response.data });
            console.log('Got a response!', this.state.posts);
        })
        .catch((error) => {
            console.log(error);
         }) */

  
    
    }

    
    render() {
    
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
                    <input name='tags' type='text' onChange={this.handleChange}  />
                </label>

                <input className={styles.submit} type='submit' value='Submit' />
            </form>
        );
    }
}
