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

export function BooksTable() {
    return (
        <div className="books_table">
            <LoadingBookTable />
        </div>
    )
}

BooksTable.propTypes = {
    books: PropTypes.array,
    loading: PropTypes.bool
}