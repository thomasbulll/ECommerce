import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/ecoomerce-49d45/us-central1/api',
});

export default instance;