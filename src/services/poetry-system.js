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
        setTimeout(() => {
            const folders = require('../dummyData/folders.json');
            resolve(folders);
        }, 2000);
    });
};

export const getFolderFiles = async (folderId) => {
    const allFiles = require('../dummyData/files.json');
    const files = allFiles.filter(x => x.folder === folderId);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(files);
        }, 2000);
    });
};
 