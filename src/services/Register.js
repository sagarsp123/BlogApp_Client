import axios from 'axios';

const apiURL = "https://nodejs-server-279i.onrender.com/api/auth/register"

export const registerUser = async (Inputs) => {
    return axios.post(apiURL, Inputs)
};