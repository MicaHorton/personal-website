import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive'
import styles from '../styles/projects.module.css';
import axios from 'axios';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const Project = props => (
    <div className={styles.box}>
        <h1>{props.project.title}</h1>
        <p>{props.snippet}</p>
        <Link to={{
            pathname:'/:id/'+props.project._id,
            state: props.project
        }} className={styles.readMore}>read more</Link>

       
    </div>
) 

export default class About extends Component {
    constructor (props) {
        super(props);
        this.state = {projects:[], wantWhat: 'all'};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/projects')
            .then(response => {
                this.setState({ projects: response.data });
            })
            .catch((error) => {
                console.log(error);
             })
    }

    listAll() {
        return this.state.projects.map(current => {
            let doc = new JSDOM(current.post);
            let snippet = doc.window.document.querySelector('h1').nextElementSibling.textContent;
            
            return <Project project={current} snippet={snippet} key={current._id}/>;
        })
    }

    listByTag() {
        const tag = this.state.wantWhat;
        return this.state.projects.map(currentProject => {
            return currentProject.tags.map(currentTag => {
                if (currentTag === tag) {
                    return <Project project={currentProject} key={currentProject._id}/>;
                }
            })
        })  
    }

    handleTagClick = (e) => {
        this.setState({wantWhat: e.target.innerHTML.toLowerCase()});
    } 

    render() {
        const wantWhat = this.state.wantWhat;
        let content;

        if (wantWhat === 'all') {
            content = this.listAll()
        } else {
            content = this.listByTag()
        }


        return (
            <>
            <MediaQuery minDeviceWidth ={1224} >
        
                <div className={styles.webTagbar}>
                    <button onClick={this.handleTagClick} className={styles.webTag}>All</button>
                    <button onClick={this.handleTagClick} className={styles.webTag}>Python</button>
                </div>

                <div className={styles.webContent}>{content}</div>
            </MediaQuery>

            <MediaQuery maxDeviceWidth = {1224}>
               <p>You are on mobile!</p>

            </MediaQuery>
            
            
            </>
        )
                  
    }
  }



