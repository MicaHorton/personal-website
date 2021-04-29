import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/blog.module.css';

const Post = props => (
    <article>
        <h1>{props.project.title}</h1>
        <p>{props.project.description}</p>
        <Link to={{pathname: '/blog/' + props.project._id}}
         className={styles.readMore}>read more</Link>
    </article>
)


export default class Blog extends Component {
    render(){
        let content = this.props.posts.map(current => {
            return <Post project={current} key={current._id}/>;
        })

        return (
            <main className={styles.blog}>
                <div className={styles.content}>{content}</div>
            </main>
        )
                  
    }
  }


/*
<div className={styles.tagbar}>
    <span className={styles.filter}>Filter</span>
    <button onClick={this.handleTagClick} className={styles.tag}>All</button>
    <button onClick={this.handleTagClick} className={styles.tag}>Python</button>
</div>

console.log('props', this.props.posts);
const wantWhat = this.state.wantWhat;
let content;

if (wantWhat === 'all') {
    content = this.listAll()
} else {
    content = this.listByTag()
}

console.log('blog rendered')

componentDidMount() {
    getAllPosts()
    .then(projects => {
        this.setState({ projects: projects });
        console.log('set projects')
    })
    .catch(err => console.log(err))
}

listAll() {
    return this.state.projects.map(current => {
        return <Post project={current} key={current._id}/>;
    })
}

listByTag() {
    const tag = this.state.wantWhat;
    return this.state.projects.map(currentProject => {
        return currentProject.tags.map(currentTag => {
            if (currentTag === tag) {
                return <Post project={currentProject} key={currentProject._id}/>;
            }
        })
    })  
}

handleTagClick = (e) => {
    this.setState({wantWhat: e.target.innerHTML.toLowerCase()});
} 

*/