import styles from '../styles/single.module.css';
import React, { useEffect, useState } from 'react';
import { getSinglePost } from '../api.js';
import { useParams } from 'react-router-dom';

/*
const Single = props => {
    const [post, setPost] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        getSinglePost(id)
        .then(post => {
            setPost(post);
        })
        .catch(err => console.log(err))

    }, []);

    if (post) {
        return (
            <main className={styles.single}>
                <div className={styles.box} 
                dangerouslySetInnerHTML={{ __html: post.sanatizedHtml }} />
            </main>
        );
    }

    return null;
}

export default Single;*/


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


