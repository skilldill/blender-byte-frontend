import React from "react";
import PropTypes from "prop-types";
import { Card, Skeleton } from "antd";

import bookMock from "../../../assets/book_mock.png";
import "./style.scss";

function MockBook() {
    return (
        <Card
            hoverable
            style={{ width: 240, margin: 20 }}
            cover={
                <img src={bookMock} alt="книга" />
            }
        >
            <Skeleton.Input 
                active
                style={{ width: 190, marginBottom: 10 }}
            />
            <Skeleton.Input 
                active
                style={{ width: 190 }}
            />
        </Card>
    )
}

function BookCard({book}) {
    const { Meta } = Card;

    return (
        <Card
            hoverable
            style={{ width: 240, margin: 20 }}
            cover={
                <img src={book.Photo} alt="книга" />
            }
        >
            <Meta title={book.FullName} description={book.Author} />
        </Card>
    )
}

BookCard.propTypes = {
    book: PropTypes.object
}

function LoadingBookTable() {
    return (
        <div className="books_loading">
            <MockBook />
            <MockBook />
            <MockBook />
            <MockBook />
            <MockBook />
            <MockBook />
            <MockBook />
        </div>
    )
}

export function BooksTable(props) {
    const { books, loading } = props;

    function renderBooks() {
        if (books && books.length) {
            return (
                <div className="books_blocks">
                    { books.map((book, i) => 
                        <BookCard key={i} book={book} />
                    ) }
                </div>
            )
        }
        return null;
    }

    return (
        <div className="books_table">
            {
                loading ?
                <LoadingBookTable /> :
                renderBooks()
            }
        </div>
    )
}

BooksTable.propTypes = {
    books: PropTypes.array,
    loading: PropTypes.bool
}