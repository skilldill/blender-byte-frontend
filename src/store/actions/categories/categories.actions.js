import { createAction } from "redux-actions";
import { api } from "../../../shared/http";
import { LOADING_SATUSES } from "../../../shared/constants";
import { booksActions } from "../books";

class CategoriesActions {
    prefix = "CATEGORIES";
    SET_CATEGORIES = `${this.prefix}.SET_CATEGORIES`;
    SELECT_CATEGORIES = `${this.prefix}.SELECT_CATEGORIES`;
    SET_LOADING_STATUS = `${this.prefix}.SET_LOADING_STATUS`;

    setCategories = createAction(this.SET_CATEGORIES);
    selectCategories = createAction(this.SELECT_CATEGORIES);
    setLoadingStatus = createAction(this.SET_LOADING_STATUS);

    fetchCategories = () => async (dispatch) => {
        dispatch(this.setLoadingStatus(LOADING_SATUSES.LOADING));
        
        try {
            const response = await api.getTypes();
            dispatch(this.setCategories(response.data));

            // TODO: необходимо для показа первых изображений, но потом нужно убрать
            const rendomCategoryId = response.data[0].id;
            dispatch(booksActions.fetchBooks(rendomCategoryId));
        } catch(error) {
            console.log(error.message);
        } finally {
            dispatch(this.setLoadingStatus(LOADING_SATUSES.NONE));
        }
    }
}

export const categoriesActions = new CategoriesActions();