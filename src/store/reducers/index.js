import { combineReducers } from "redux";

import { booksReducer } from "./books";

export const reducers = combineReducers({
    books: booksReducer
})