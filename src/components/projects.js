import React, { Component } from 'react';

export default class About extends Component {
    constructor (props) {
        super(props);

        /* Initialize Empty Array of Projects */
        this.state = {projects:[]}

        /* Initialize Project Box */
        const Project = props => (
            <div className = 'box'>
                <h1>{props.projects.title}</h1>
                <p>{props.projects.post}</p>
            </div>
        )
    }

    componentDidMount() {
        /* Fill Project Array with Data */
        this.setState({
            title: 'test title',
            post: 'test pst'
        })
    }

    listProjects() {
        /* Map Array of Projects to Box */
        return this.state.projects.map(currentProject => {
            return <Project />;
        })
    }

    render() {
        return (
            <>
            <h1>Hiiii</h1>
            <body>{ this.listProjects() }</body>
            </>
        )
                  
    }
  }

/*
The Goal:
two half modules, that adjust to single modules on mobile
that adjust based to tags
ughh.. I want to work on it but I shoud sleep. the sad thing is I can't sleep anyway, but I will will will will will
*/