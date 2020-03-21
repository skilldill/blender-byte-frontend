import { combineReducers } from "redux";

import { booksReducer } from "./books";
import { categoriesReducer } from "./categories";

export const reducers = combineReducers({
    books: booksReducer,
    categories: categoriesReducer
})