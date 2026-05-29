import axios from "axios";

// 1. Retrieve the backend URL from environment variables
let rawUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/";

// 2. Normalize: Ensure it starts with http:// or https:// (default to https for production)
if (rawUrl && !/^https?:\/\//i.test(rawUrl)) {
    rawUrl = "https://" + rawUrl;
}

// 3. Normalize: Ensure it ends with a trailing slash
if (rawUrl && !rawUrl.endsWith("/")) {
    rawUrl = rawUrl + "/";
}

export const API_BASE_URL = rawUrl;

// Create a pre-configured Axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
