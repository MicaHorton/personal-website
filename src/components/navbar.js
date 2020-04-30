import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="nav-item is-active" active-color="red">About</Link>
        <Link to="/contact" className="nav-item" active-color="green">Contact</Link>
        <span className="nav-indicator"></span>
      </nav>
      
    );
  }
}

/*
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