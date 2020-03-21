import { createAction } from "redux-actions";
import { api } from "../../../shared/http";
import { LOADING_SATUSES } from "../../../shared/constants";

class BooksActions {
    prefix = "BOOKS";
    SET_BOOKS = `${this.prefix}.SET_BOOKS`;
    SET_LOADING_STATUS = `${this.prefix}.SET_LOADING_STATUS`;
    SET_ERROR_MESSAGE = `${this.prefix}.SET_ERROR_MESSAGE`;

    setBooks = createAction(this.SET_BOOKS);
    setLoadingStatus = createAction(this.SET_LOADING_STATUS);
    setErrorMessage = createAction(this.SET_ERROR_MESSAGE);

    fetchBooks = (categoryId) => async (dispatch) => {
        dispatch(this.setLoadingStatus(LOADING_SATUSES.LOADING));
        
        try {
            const response = await api.getBooks(categoryId);
            dispatch(this.setBooks(response.data));
        } catch(error) {
            dispatch(this.setErrorMessage(error.message));
        } finally {
            dispatch(this.setLoadingStatus(LOADING_SATUSES.NONE));
        }
    }
}

export const booksActions = new BooksActions();