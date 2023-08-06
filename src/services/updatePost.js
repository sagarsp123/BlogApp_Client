import axios from 'axios';

export const updatePost = async (postId, postInfo) => {

    const apiURL = `https://nodejs-server-279i.onrender.com/api/posts/${postId}`
    
    return axios.put(apiURL, postInfo)
};