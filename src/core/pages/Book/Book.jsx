import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Button } from "antd";

import { bascketActions } from "../../../store/actions/bascket";
import mockBook from "../../../assets/book_mock.png";
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
    const dispatch = useDispatch();
    const bascketState = useSelector((state) => state.bascket);
    const [loaded, setLoaded] = useState(false);
    const { book } = props;

    function handleClick() {
        const books = [...bascketState.books];
        books.push(book);
        dispatch(bascketActions.setBooks(books));
        localStorage.setItem("bascket", JSON.stringify(books));
    }

    return (
        <div style={{ 
            display: "flex",
            alignItems: "center",
            marginTop: "50px",
            paddingBottom: "50px"
        }}
        >
            <img
                src={loaded ? book.Photo : mockBook}
                alt={book.FullName}
                height={400}
                onLoad={() => setLoaded(true)}
            />
            <div 
                className="description"
                style={{ padding: "20px" }}
            >
                <h3>Автор: {book.Author}</h3>
                <p>{book.Description}</p>
                <div>
                    <Button onClick={handleClick} shape="round">В корзину</Button>
                </div>
            </div>
        </div>
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
                book ?
                <BookContent book={book} /> :
                <LoadingBook />
            }
        </div>
    )
}