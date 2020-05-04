import React, { Component } from 'react';
import styles from '../styles/projects.module.css';
import axios from 'axios';


const Project = props => (
    <div className={styles.box}>
        <h1>{props.project.title}</h1>
        <p>{props.project.post}</p>
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
            return <Project project={current} key={current._id}/>;
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

    handleClick = (e) => {
        this.setState({wantWhat: e.target.innerHTML.toLowerCase()});
    } 

    render() {
        const wantWhat = this.state.wantWhat;
        let content;

        if (wantWhat === 'all') {
            content = <div> {this.listAll()} </div>
        } else {
            console.log("tag", this.listByTag()) 
            content = <div> {this.listByTag()}</div>
        }


        return (
            <>
            <div className={styles.tagbar}>
                <button onClick={this.handleClick} className={styles.tag}>All</button>
                <button onClick={this.handleClick} className={styles.tag}>Python</button>
            </div>

            {content}
            </>
        )
                  
    }
  }


/*
If nothing has been clicked:
  list all
if a tag has been clicked:
  list according to the tag

state.projects manages the changing data
a new state for managing tags
  wantAll, wantWhat?

SOLUTION
if wantWhat == all:
  list all
if wantWhat == tag:
  list by tag (has to be wrapped in div)

if whantall = true:
  list all
if wantall = false:
  do nothing and let tag function do it's thing


use state to change rendered

*/