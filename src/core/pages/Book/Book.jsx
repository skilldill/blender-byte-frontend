import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from "antd";

import { api } from "../../../shared/http";
import "./style.scss";

function LoadingBook() {
    return (
        <div className="loading_book">
            <Spin indicator={
                <LoadingOutlined style={{ fontSize: 100 }} spin />
            } />
        </div>
    )
}

function BookContent(props) {
    const { book } = props;
    return (
        <div></div>
    )
}

function BookHeader(props) {
    const { book } = props;

    return (
        <div className="book_poster">
            <img src={book.Photo} alt={book.FullName} />
        </div>
    )
}

export function Book() {
    const [book, setBook] = useState(0);
    const { bookId } = useParams();

    async function fetchBook() {
        try {
            const response = await api.getBook(bookId);
            setBook(response.data);
        } catch(error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchBook();
    }, [api])

    return (
        <div className="book">
            <Header title={
                book ? 
                <h2 className="book_title">{book.FullName}</h2> :
                <LoadingBook />
                }
            >
                {book && <BookHeader book={book} />}
            </Header>
            {
                <LoadingBook />
            }
        </div>
    )
}