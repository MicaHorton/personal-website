import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import styles from '../styles/projects.module.css';
import axios from 'axios';


const handleReadClick = (id) => {
    console.log('Read more button clicked!', id)

    
}

const Project = props => (
    <div className={styles.box}>
        <h1>{props.project.title}</h1>
        <p>{props.project.post}</p>
        <button className={styles.readMore} onClick={() => handleReadClick(props.project._id)}>read more</button>
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



  /* Making Website Mobile Friendly

  Smoothen web transitioning
  Change to use Device Width
  
  Option 1: Use just CSS @media tags
  Option 2: Use <MediaQuery

  
             
  
  */