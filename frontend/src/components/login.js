import React, { Component } from 'react';
import styles from '../styles/login.module.css';
import axios from 'axios';

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
    const data = this.state;
    console.log(data);

    /* Development: http://localhost:5000/email */
    /* Production: https://api-dot-personal-website-279319.wl.r.appspot.com/email */

    axios.post('https://api-dot-personal-website-279319.wl.r.appspot.com/email', data)
      .then(res => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      })
    
    
  }

  render() {
    return (
        <div className={styles.box}>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <label className={styles.formItem}>
              Email
              <input name='email' type='email' value={this.state.email} onChange={this.handleChange} required />        
            </label>

            <label className={styles.formItem}>
              Password
              <input name='password' type='password' value={this.state.password} onChange={this.handleChange} required />        
            </label>

            <input className={`${styles.formItem} ${styles.button}`} type='submit' value='Submit' />

          </form>
        </div>
    );
  }
}