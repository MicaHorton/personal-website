import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
    constructor (props) {
        super(props);
        let colorActive = this.getColorFromPath(this.props.location.pathname);
        this.state = {active: colorActive};
    }

    getColorFromPath = (path) => {
        let colorActive = [false, false, false, false]
        switch (path) {
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
            default:
                break;
        }
        return colorActive;

    }

    componentWillMount() {
        this.unlisten = this.props.history.listen(location => {
            let newColorActive = this.getColorFromPath(location.pathname);
            this.setState({ active: newColorActive });
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        return (
            <nav className={styles.nav}>
                <Link to='/' className={`${styles.navItem} ${styles.orange} 
                       ${this.state.active[0] && styles.active}`}>About</Link>

                <Link to='/projects'className={`${styles.navItem} ${styles.green} 
                      ${this.state.active[1] && styles.active}`}>Projects</Link>
            
                <Link to='/blog' className={`${styles.navItem} ${styles.red} 
                      ${this.state.active[2] && styles.active}`}>Blog</Link>

                <Link to='/contact' className={`${styles.navItem} ${styles.purple} 
                      ${this.state.active[3] && styles.active}`}>Contact</Link>

                <span className={`${styles.navIndicator} 
                    ${this.state.active[0] && styles.orange}
                    ${this.state.active[1] && styles.green}
                    ${this.state.active[2] && styles.red}
                    ${this.state.active[3] && styles.purple}
                `}></span>

            </nav>
       );
    }
}

export default withRouter(Navbar);
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