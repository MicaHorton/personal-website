import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

export default class Navbar extends Component {
  constructor (props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.match.params.id )

  }

  render() {
    console.log('Render was run');
    const navItem = this.props.path;
    console.log(this.props);
    let colorActive = [false, false, false, false]

    switch (navItem) {
      case '/':
        colorActive[0] = true;
        break;
      case '/projects':
        colorActive[1] = true;
        break;
      case '/blog':
        colorActive[2] = true;
        break;
      case '/contact':
        colorActive[3] = true;
        break;
    }

    return (
      <nav className={styles.nav}>
        <Link to="/" className={`${styles.navItem} ${styles.orange} ${colorActive[0] && styles.active}`}>About</Link>
        <Link to="/projects"  className={`${styles.navItem} ${styles.green} ${colorActive[1] && styles.active}`}>Projects</Link>
        <Link to="/blog" className={`${styles.navItem} ${styles.red} ${colorActive[2] && styles.active}`}>Blog</Link>
        <Link to="/contact" className={`${styles.navItem} ${styles.purple} ${colorActive[3] && styles.active}`}>Contact</Link>
        <span className={`${styles.navIndicator} 
          ${colorActive[0] && styles.orange}
          ${colorActive[1] && styles.green}
          ${colorActive[2] && styles.red}
          ${colorActive[3] && styles.purple}
        `}></span>
      </nav>
      
    );
  }
}

/*



open Github in new tab or nah?
target="_blank" 


Toggle Class Onclick
https://stackoverflow.com/questions/42630473/react-toggle-class-onclick#42630743

Get Clicked Element
https://stackoverflow.com/questions/55547780/how-to-get-a-clicked-element-in-react

Navbar Insparation
https://codepen.io/knyttneve/pen/LKrGBy

Attempt At Doing Cool Animation Thing (but fail):

handleClick = () => {
  console.log('Button clicked! This is: ', this)

  const items = document.querySelectorAll('.nav-item');
  const indicator = document.querySelector('.nav-indicator');

  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });

}


const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item);
});

*/