import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <Link to="/" className={styles.navItem}>About</Link>
        <Link to="/projects" className={styles.navItem}>Projects</Link>
        <span className={styles.navIndicator}></span>
      </nav>
      
    );
  }
}

/*
options:
round navbar
round boxes

OR

flat navbar w. name (more name visibility...)
round boxes, gray background, with little colors

lol, attempt at doing cool animation thing, but fail
  
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

https://stackoverflow.com/questions/55547780/how-to-get-a-clicked-element-in-react

*/