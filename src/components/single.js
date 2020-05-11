import React, { Component } from 'react';
import styles from '../styles/single.module.css';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export default class Single extends Component {
    constructor(props) {
        super(props);
     }

    getPost() {
        if (this.props.location.state) {
            let doc = new JSDOM(this.props.location.state.post);
            /* doc.window.document.body.querySelector('h1').remove(); */
            let p = doc.window.document.body.getElementsByTagName('p');
            
            for (let i = 0; i < p.length; i++) {
                if (p[i].innerHTML === '&nbsp;') {
                    p[i].remove();
                }
            }


            let item = doc.window.document.body.outerHTML; 
            console.log(item);

            return (
                <div className={styles.box} dangerouslySetInnerHTML={{__html: item}}></div>
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