import React, { Component } from 'react';
import styles from '../styles/about.module.css';
import 'font-awesome/css/font-awesome.min.css';
/*
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';*/


export default class About extends Component {
  render() {
    return (
        <>
        <div className={styles.box}>
          <h1>Hi, my name is Mica Horton</h1>
          <p>I'm an LAHS student living in the Bay Area who loves to code. 
            This website is a tribute to all the projects I've done. 
            Check out my work under the projects tab or learn more about me at:</p>

            <ul className={styles.icons}>
              <li><i className="fa fa-github"></i><p>GitHub</p></li>
              <li><i className="fa fa-stack-overflow"></i><p>Stack Overflow</p></li>
              <li><i className="fa fa-linkedin-square"></i><p>LinkedIn</p></li>
            </ul>
        </div>
        
        
        <div className={styles.box}>
          <h1>Languages I Know</h1>
          <p>In order of most experience to least.</p>
          <ul>
            <li>Python</li>
            <li>HTML, CSS</li>
            <li>JavaScript (plus the React framework and some Node.js)</li>
            <li>C++ (mainly in the context of Arduino)</li>
            <li>Pascal</li>
          </ul>
           
          
        </div>

        <div className={styles.box}>
            <h1>Events I've Gone To</h1>
            <ul>
              <li>LAHS Hacks IV</li>
              <li>Superposition Hacks IV (see project)</li>
              <li>Bay Area Science Fesitval (see project)</li>
              <li>NIMBLE Youth Innovation Showcase (see project)</li>
  
            </ul>

        </div>

        <div className={styles.box}>
            <h1>Other Acheivements</h1>
            <ul>
              <li> President of Adventure Club, the hiking and camping club focused on going outside even though staying home and programming is fun too. (See our Instagram @lahsadventureclub.) </li>
              <li> Passed John Hopkins Center of Talented Youth Assessment </li>
              <li> Received Challenger Merit Scholarship </li>
              <li> Learning Spanish speaker in Spanish III Honors. Received the silver metal for the NHS Spanish exam. </li>
              <li> Has completed 20 service hours volunteering at the local TV station (the KMVT) as a cinematographer. </li>
            </ul>

        </div>

        <div className={styles.box}>
            <h1>Contact Me</h1>

        </div>

       
        </>
    );
  }
}

/*
 <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
*/