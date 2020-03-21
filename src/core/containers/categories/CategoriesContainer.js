import { connect } from "react-redux";

import { Categories } from "../../components/Categories";
import { categoriesActions } from "../../../store/actions";
import { LOADING_SATUSES } from "../../../shared/constants";

const mapStateToProps = ({categories}) => ({
    categories: categories.categories,
    loading: categories.loading === LOADING_SATUSES.LOADING
})

const mapDispatchToProps = (dispatch) => ({
    fetchCategories: () => dispatch(categoriesActions.fetchCategories()),
})

export const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories);