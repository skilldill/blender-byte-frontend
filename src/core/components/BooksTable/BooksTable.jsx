import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Skeleton, Button } from "antd";
import { ShoppingOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
import { Empty } from "antd";

import bookMock from "../../../assets/book_mock.png";
import "./style.scss";
import { ROUTER_URLS } from "../../../shared/constants";

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

function BookCard(props) {
    const {book, onAddBascket} = props;
    const [loadedData, setLoadedData] = useState(false);
    const { Meta } = Card;

    function handleClick(event) {
        event.stopPropagation();

        const userBascket = localStorage.getItem("basket");
        if (userBascket) {
            const bascketBooks = JSON.parse(userBascket);
            bascketBooks.push(book);
            onAddBascket && onAddBascket(bascketBooks);
            localStorage.setItem("basket", JSON.stringify(bascketBooks));
        } else {
            onAddBascket && onAddBascket([book]);
            localStorage.setItem("basket", JSON.stringify([book]));
        }
        
    }

    return (
        <Card
            hoverable
            style={{ width: 240, margin: 20 }}
            cover={
                <div style={{ overflow: "hidden", height: "330px" }}>
                    <Link to={`${ROUTER_URLS.BOOK}/${book.ID}`}>
                        <img 
                            src={!loadedData ? bookMock : book.Photo} 
                            alt="книга" 
                            width={240}
                            onLoad={() => setLoadedData(true)}
                        />
                    </Link>
                </div>
            }
        >
            <Link to={`${ROUTER_URLS.BOOK}/${book.ID}`}>
                <Meta title={book.FullName} description={book.Author} />
            </Link>
            <div style={{ display: "flex", marginTop: "5px", justifyContent: "flex-end" }}>
                <Button 
                    type="primary" 
                    shape="circle" 
                    icon={<ShoppingOutlined />} 
                    size="middle"
                    onClick={handleClick}
                />
            </div>
        </Card>
    )
}

BookCard.propTypes = {
    book: PropTypes.object,
    onAddBascket: PropTypes.func
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
    const { books, loading, updateBascket } = props;

    function renderBooks() {
        if (books && books.length) {
            return (
                <div className="books_blocks">
                    { books.map((book, i) => 
                        <BookCard key={i} book={book} onAddBascket={updateBascket} />
                    ) }
                </div>
            )
        }
        return <Empty description="По вашемо запросу ничего не найдено" />;
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