import { connect } from "react-redux";
import { BooksTable } from "../../components/BooksTable";
import { LOADING_SATUSES } from "../../../shared/constants";
import { bascketActions } from "../../../store/actions";

const mapStateToProps = ({ books }) => ({
    books: books.books,
    loading: books.loading === LOADING_SATUSES.LOADING
});

const mapDispatchToProps = (dispatch) => ({
    updateBascket: (books) => dispatch(bascketActions.setBooks(books))
})

export const BooksTableContainer = connect(mapStateToProps, mapDispatchToProps)(BooksTable);