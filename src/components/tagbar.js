import React, { Component } from 'react';
import tstyles from '../styles/tagbar.module.css';
import pstyles from '../styles/projects.module.css';

const Project = props => (
    <div className={pstyles.box}>
        <h1>{props.project.title}</h1>
        <p>{props.project.post}</p>
    </div>
) 


export default class About extends Component {

    listByTag = (e) => {
        this.props.data.map(currentProject => {
            currentProject.tags.map(currentTag => {
                if (currentTag == e.target.innerHTML.toLowerCase()) {
                    /* Project has tag */
                    console.log(currentProject);
                    return <Project project={currentProject}/>
                   
                    
  
                }
            })
        })  
    }

    render() {

        return (
            <>
                <div className={tstyles.tagbar}>
                    <button onClick={this.listByTag} className={tstyles.tag}>Python</button>
                </div>
    
            </>
        )
                  
    }
  }

/*

MAKE TAGGED PROJECTS RENDER & UNTAGGED GO AWAY

Option 1: remove the original rendering, and re-render somehow
if button not clicked show projects, if clicked than do. than how do get back to original.
shit how will I do mutiple tags. maybe that's not an option now. crap
Option 2: make it so default is all tags, and then click changes it


*/