import axios from "axios";
import { API_URLS } from "../constants";

const httpConfig = {
    baseURL: API_URLS.BASE_URL
}

export const httpClient = axios.create(httpConfig);