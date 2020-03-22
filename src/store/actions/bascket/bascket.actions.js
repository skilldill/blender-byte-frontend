import { createAction } from "redux-actions";

class BascketActions {
    prefix = "BASCKET";
    SET_BOOKS = `${this.prefix}.SET_BOOKS`;

    setBooks = createAction(this.SET_BOOKS);
}

export const bascketActions = new BascketActions();