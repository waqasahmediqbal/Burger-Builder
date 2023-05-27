import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-f0773-default-rtdb.firebaseio.com/'
});

export default instance;