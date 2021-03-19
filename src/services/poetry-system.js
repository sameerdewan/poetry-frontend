import axios from 'axios';

const baseURL = process.env.REACT_APP_POETRY_SYSTEM_URL;

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

export const getFolders = async () => {
    return new Promise(resolve => {
        const folders = require('../dummyData/folders.json');
        resolve(folders);
    });
};

export const getFolderFiles = async (folderId) => {
    const allFiles = require('../dummyData/files.json');
    const files = allFiles.filter(x => x.folder === folderId);
    return new Promise(resolve => {
        resolve(files);
    });
};
 