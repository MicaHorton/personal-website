import React, { Component } from 'react';
import { addPost } from '../api.js';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: '',
            description: '',
            markdown: '',
            tags: ''
        };
    }

    handleChange = (e) => {   
        const name = e.target.name; 
        const value = e.target.value;
        this.setState({
          [name]: value
        });   
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const post = this.state;

        addPost(post)
        .then(res => {
            console.log(res);
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    
    render() {
        return (
            <main>
                <h1 className='form-header'>Add Post</h1>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label className='form-item'>
                        Title
                        <input name='title' type='text' value={this.state.title} onChange={this.handleChange} required />
                    </label>
                    <label className='form-item'>
                        Description
                        <textarea name='description' rows='10' type='text' value={this.state.description} onChange={this.handleChange} required />
                    </label>
                    <label className='form-item'>
                        Markdown
                        <textarea name='markdown' type='text' rows='15' value={this.state.markdown} onChange={this.handleChange} required />
                    </label>
                    <label className='form-item'>
                        Tags
                        <input name='tags' type='text' onChange={this.handleChange}  />
                    </label>
                    <input className='button submit-button' type='submit' value='Submit' />
                </form>
            </main>
            
        );
    }
}
