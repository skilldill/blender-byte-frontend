import { handleActions } from "redux-actions";
import { categoriesActions } from "../../actions";

const { 
    SET_CATEGORIES,
    SET_LOADING_STATUS,
    SELECT_CATEGORIES
} = categoriesActions;

const intialState = {
    categories: [],
    currentCategoryId: null, 
    loading: null
}

const mapReducer = {
    [SET_CATEGORIES]: (state, action) => ({
        ...state,
        categories: action.payload
    }),

    [SELECT_CATEGORIES]: (state, action) => ({
        ...state,
        currentCategoryId: action.payload
    }),

    [SET_LOADING_STATUS]: (state, action) => ({
        ...state,
        loading: action.payload
    })
}

export const categoriesReducer = handleActions(mapReducer, intialState);