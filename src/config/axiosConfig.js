// src/config/axiosConfig.js
import axios from "axios";  // must be used below

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export default API;
