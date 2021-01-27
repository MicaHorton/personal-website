import axios from 'axios';
// const base = 'http://api.micahorton.com/'; 
const base = 'http://localhost:5000/'; 

export const getAllPosts = () => {
    return axios.get(base)
    .then(res => {
        console.log('get all posts', res.data);
        return res.data
    })
    .catch(err => {
        return err
    })
}

export const getSinglePost = postId => {
    return axios.get(base + postId)
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err
    })
}

export const updatePost = post => {
    return axios.post(base + 'update/' + post.id, post, {withCredentials: true})
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err
    })
}

export const addPost = post => {
    return axios.post(base + 'add', post, {withCredentials: true})
    .then(res => {
        return res.data
    })
    .catch(err => {
        return err
    })
}

export const login = credentials => {
    return axios.post(base + 'login', credentials, {withCredentials: true, credentials: 'include'})
    .then(res => {
        return res
    }).catch(err => {
       return err
    })
}