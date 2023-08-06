import axios from 'axios';

export const getPosts = async (cat) => {

    const apiURL = `https://nodejs-server-279i.onrender.com/api/posts/${cat}`
    
    return axios.get(apiURL)
};