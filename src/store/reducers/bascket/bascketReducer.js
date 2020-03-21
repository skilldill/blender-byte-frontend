import { handleActions } from "redux-actions";
import { bascketActions } from "../../actions";

//Initial check bascket

const booksBascket = localStorage.getItem("basket")

console.log(booksBascket);

const initialState = {
    books: booksBascket ? JSON.parse(booksBascket) : [],
}

const mapReducer = {
    [bascketActions.SET_BOOKS]: (state, action) => ({
        ...state,
        books: action.payload
    })
}

export const bascketReducer = handleActions(mapReducer, initialState);