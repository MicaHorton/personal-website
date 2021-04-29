import styles from '../styles/single.module.css';

const Single = props => {
    return (
        <main>
            <div className={styles.box} 
            dangerouslySetInnerHTML={{ __html: props.post.sanatizedHtml }} />         
        </main>
    );
}

export default Single;

/*
export default class Single extends Component {
    render() {
        return (
            <main>
                <div className={styles.box} 
                dangerouslySetInnerHTML={{ __html: this.props.post.sanatizedHtml }} />         
            </main>
        );
    }
}*/
