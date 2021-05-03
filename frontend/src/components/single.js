import styles from '../styles/single.module.css';

const Single = props => {
    if (props.post) {
        return (
            <main className={styles.single}>
                <div className={styles.box} 
                dangerouslySetInnerHTML={{ __html: props.post.sanatizedHtml }} />
            </main>
        );
    }

    return null;
}

export default Single;


