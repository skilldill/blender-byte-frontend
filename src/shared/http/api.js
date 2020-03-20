import { httpClient } from "./httpClient";
import { API_URLS } from "../constants";

class Api {
    getBooks() {
        return httpClient.get(API_URLS.BOOKS);
    }
}

export const api = new Api();