import React, { Component } from 'react';
import styles from '../styles/projects.module.css';
import axios from 'axios';
import Tagbar from "./tagbar.js";

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
        axios.get('http://localhost:5000/projects')
            .then(response => {
                this.setState({ projects: response.data });
            })
            .catch((error) => {
                console.log(error);
             })


        /*
        this.setState({ projects: 
            [
                {title:'test title', post:'test post'},
                {title:'test title', post:'test post'}
            ]
        })*/
    }

    listProjects() {
        /* Map Array of Projects to Box */
        return this.state.projects.map(current => {
            return <Project project={current}/>;
        })



        
    }

    render() {
        return (
            <>
            <Tagbar data={this.state.projects} />
            <div>{ this.listProjects() }</div>
            </>
        )
                  
    }
  }

