import React, { Component } from 'react';
import styles from '../styles/projects.module.css';

/* Initialize Project Box */
const Project = props => (
    <div className={styles.box}>
        <h1>{props.project.title}</h1>
        <p>{props.project.post}</p>
    </div>
) 

export default class About extends Component {
    constructor (props) {
        super(props);

        /* Initialize Empty Array of Projects */
        this.state = {projects:[]};
    }

    componentDidMount() {
        /* Fill Project Array with Data */
        this.setState({ projects: 
            [
                {title:'test title', post:'test post'},
                {title:'test title', post:'test post'}
            ]
        })
    }

    listProjects() {
        /* Map Array of Projects to Box */
        return this.state.projects.map(currentProject => {
            return <Project project={currentProject}/>;
        })
    }

    render() {
        return (
            <body>{ this.listProjects() }</body>
        )
                  
    }
  }

/*
The Goal:
two half modules, that adjust to single modules on mobile
that adjust based to tags
ughh.. I want to work on it but I shoud sleep. the sad thing is I can't sleep anyway, but I will will will will will
*/