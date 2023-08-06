import axios from 'axios';

export const deletePost = async (postId) => {

    const apiURL = `https://nodejs-server-279i.onrender.com/api/posts/${postId}`
    
    return axios.delete(apiURL)
};