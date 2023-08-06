import axios from 'axios';

export const getPostsMenu = async (cat) => {

    const apiURL = `https://nodejs-server-279i.onrender.com/api/posts/?cat=${cat}`
    
    return axios.get(apiURL)
};