import styles from '../styles/single.module.css';

const Single = props => {
    return (
        <main className={styles.single}>
            <div className={styles.box} 
            dangerouslySetInnerHTML={{ __html: props.post.sanatizedHtml }} />
        </main>
    );
}

export default Single;

