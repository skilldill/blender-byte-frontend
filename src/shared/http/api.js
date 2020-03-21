import { httpClient } from "./httpClient";
import { API_URLS } from "../constants";

class Api {
    getBooksIds(typeId) {
        const query = API_URLS.BOOKS_IDS.replace(":id", typeId);
        return httpClient.get(query);
    }

    getTypes() {
        return httpClient.get(API_URLS.TYPES);
    }

    getBook(bookId) {
        const query = API_URLS.BOOK.replace(":id", bookId);
        return httpClient.get(query);
    }

    getBooksCount(typeId) {
        const query = API_URLS.COUNT_BOOKS.replace(":id", typeId);
        return httpClient.get(query);
    }

    getBooks(typeId) {
        const query = API_URLS.BOOKS.replace(":id", typeId);
        return httpClient.get(query);
    }
}

export const api = new Api();