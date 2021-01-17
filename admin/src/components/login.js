import React, { Component } from 'react';
import { login } from '../api.js';

export default class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        const credentials = this.state;
    
        login(credentials)
        .then(res => {
            console.log(res);
            this.props.history.push('/');
        })
        .catch(err => console.log(err))
        
    }

    render() {
        return (
            <main>  
                <h1 className='login-header'>Login</h1>
                <form className='login-form' onSubmit={this.handleSubmit}>
                    <label className='login-item'>
                        Email
                        <input name='email' type='email' value={this.state.email} onChange={this.handleChange} required />                
                    </label>
                    <label className='login-item'>
                        Password
                        <input name='password' type='password' value={this.state.password} onChange={this.handleChange} required />                
                    </label>
                    <input className='button login-button' type='submit' value='Submit' />
                </form>
            </main>
        );
    }
}