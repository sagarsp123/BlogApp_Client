import axios from 'axios';

const apiURL = "https://nodejs-server-279i.onrender.com/api/auth/logout"

export const logoutUser = async () => {
    return axios.post(apiURL)
};