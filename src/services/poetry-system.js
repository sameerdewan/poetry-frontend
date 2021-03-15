import axios from 'axios';

const baseURL = process.env.POETRY_SYSTEM_URL;

export const login = async ({ username, password }) => {
    const response = await axios.post(`${baseURL}/api/login`, { username, password });
    const token = response.data.token;
    window.localStorage.setItem('token', token);
};

export const register = async ({ username, password, email }) => {
    await axios.post(`${baseURL}/api/registration`, { username, password, email });
};

export const validate = async ({ validationCode }) => {
    await axios.post(`${baseURL}/api/registration/validate/${validationCode}`);
};
