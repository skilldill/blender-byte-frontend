import { handleActions } from "redux-actions";
import { booksActions } from "../../actions";

const initialState = {
    books: []
}

const mapReducer = {
    [booksActions.SET_BOOKS]: (state, action) => ({
        ...state,
        books: action.payload
    })
}

export const booksReducer = handleActions(mapReducer, initialState);