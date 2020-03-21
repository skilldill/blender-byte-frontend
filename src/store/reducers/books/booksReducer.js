import { handleActions } from "redux-actions";
import { booksActions } from "../../actions";

const initialState = {
    books: [],
    loading: null
}

const mapReducer = {
    [booksActions.SET_BOOKS]: (state, action) => ({
        ...state,
        books: action.payload
    }),
    [booksActions.SET_LOADING_STATUS]: (state, action) => ({
        ...state,
        loading: action.payload
    })
}

export const booksReducer = handleActions(mapReducer, initialState);