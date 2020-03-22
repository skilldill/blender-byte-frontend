import { connect } from "react-redux";

import { Categories } from "../../components/Categories";
import { categoriesActions, booksActions } from "../../../store/actions";
import { LOADING_SATUSES } from "../../../shared/constants";

const mapStateToProps = ({categories}) => ({
    categories: categories.categories,
    loading: categories.loading === LOADING_SATUSES.LOADING
})

const mapDispatchToProps = (dispatch) => ({
    fetchCategories: () => dispatch(categoriesActions.fetchCategories()),
    fetchBooks: (categoryId) => dispatch(booksActions.fetchBooks(categoryId)),
})

export const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories);