import { connect } from "react-redux";
import { BooksTable } from "../../components/BooksTable";
import { LOADING_SATUSES } from "../../../shared/constants";

const mapStateToProps = ({ books }) => ({
    books: books.books,
    loading: books.loading === LOADING_SATUSES.LOADING
});

export const BooksTableContainer = connect(mapStateToProps)(BooksTable);