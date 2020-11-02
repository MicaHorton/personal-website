import React, { Component } from 'react';
/*import styles from '../styles/contact.module.css';*/
import axios from 'axios';


export default class Contact extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      alert: false,
      required: true
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
    

    this.setState({
      name: '',
      email: '',
      message: '',
      alert: true,
      required: false
    });

    
    


    /* Development: http://localhost:5000/email */
    /* Production: https://api-dot-personal-website-279319.wl.r.appspot.com/email */

    /*
    axios.post('https://api-dot-personal-website-279319.wl.r.appspot.com/email', data)
      .then(res => {
        console.log(res);
      }).catch((error) => {
        console.log(error);
      })*/
      
    
  }


  render() {
    if (this.state.alert) {
      alert = 
        <div className={styles.alert}>
          Message has been sent!
        </div>;
    }

    let required = this.state.required;



    return (
      <div className={styles.box}>
        <h1>Contact Me</h1>
        <form onSubmit={this.handleSubmit}>
          <label className={styles.formItem}>
            Name
            <input name='name' type='text' value={this.state.name} onChange={this.handleChange} required={required} />        
          </label>

          <label className={styles.formItem}>
            Email
            <input name='email' type='email' value={this.state.email} onChange={this.handleChange} required={required} />        
          </label>

          <label className={styles.formItem}>
            Message
            <textarea name='message' rows='10' value={this.state.message} onChange={this.handleChange} required={required} />        
          </label>

          <input className={styles.formItem} type='submit' value='Submit' />

          {alert}

        </form>

      </div>

        

    );
  }
}

/*
<h1>Contact Me</h1>
          <form onSubmit={this.handleSubmit}>
            <label className={styles.formItem}>
              Name
              <input type='text' value={this.state.value} onChange={this.handleChange} />        
            </label>

            <label className={styles.formItem}>
              Email
              <input type='email' value={this.state.value} onChange={this.handleChange} />        
            </label>

            <label className={styles.formItem}>
              Message
              <textarea rows='30' value={this.state.value} onChange={this.handleChange} />        
            </label>

            <input className={styles.formItem} type='submit' value='Submit' />

          </form>

*/