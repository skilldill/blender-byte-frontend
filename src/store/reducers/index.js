import { combineReducers } from "redux";

import { booksReducer } from "./books";
import { categoriesReducer } from "./categories";
import { bascketReducer } from "./bascket";

export const reducers = combineReducers({
    books: booksReducer,
    categories: categoriesReducer,
    bascket: bascketReducer
})