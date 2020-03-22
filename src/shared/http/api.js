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

    findByWord(query) {
        const params = { key: query };
        return httpClient.get(API_URLS.FIND_BY_WORD, { params });
    }

    findByTag(tag) {
        const params = { key: tag };
        return httpClient.get(API_URLS.FIND_BY_TAG, { params });
    }
}

export const api = new Api();