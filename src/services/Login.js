import axios from 'axios';

const apiURL = "https://nodejs-server-279i.onrender.com/api/auth/login"

export const loginUser = async (Inputs) => {
    return axios.post(apiURL, Inputs)
};