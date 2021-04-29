import { Link } from 'react-router-dom';
import styles from '../styles/blog.module.css';

const Post = props => (
    <article>
        <h1>{props.project.title}</h1>
        <p>{props.project.description}</p>
        <Link to={{pathname: '/blog/' + props.project._id}}
         className={styles.readMore}>read more</Link>
    </article>
);

const Blog = props => {

    console.log(props);
    
    let content = props.posts.map(current => {
        return <Post project={current} key={current._id}/>;
    })
    
    return (
        <main className={styles.blog}>
            <div className={styles.content}>{content}</div>
        </main>
    )

}

export default Blog;

