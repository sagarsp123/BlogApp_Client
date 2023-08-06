import axios from 'axios';

export const addPost = async (postInfo) => {

    const apiURL = 'https://nodejs-server-279i.onrender.com/api/posts/'
    
    return axios.post(apiURL, postInfo)
};