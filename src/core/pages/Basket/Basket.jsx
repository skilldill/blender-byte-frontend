import React, { useState } from "react";
import PropTypes from "prop-types";
import {useSelector, useDispatch} from "react-redux";
import { Button } from "antd";
import "./style.scss";

import bookMock from "../../../assets/book_mock.png";
import { shortText } from "../../../shared/utils";
import { Header } from "../../components/Header";
import { bascketActions } from "../../../store/actions";

function BookInBasket(props) {
    const [loaded, setLoaded] = useState(false);
    const {book, onRemove} = props;

    return (
        <div className="book_in_basket">
            <img 
                src={!loaded ? bookMock : book.Photo}
                alt={`книга ${book.FullName}`}
                onLoad={() => setLoaded(true)}
            />
            <div className="description">
                <h2>{book.FullName}, автор: {book.Author}</h2>
                <p>{shortText(book.Description)}</p>
                <div className="controls">
                    <Button shape="round" type="primary" style={{marginRight: "10px"}}>
                        Оформить заказ
                    </Button>
                    <Button 
                        shape="round"
                        type="default"
                        onClick={() => onRemove && onRemove()}
                    >Убрать из корзины</Button>
                </div>
            </div>
        </div>
    )
}

BookInBasket.propTypes = {
    book: PropTypes.object,
    onRemove: PropTypes.func
}

export function Basket() {
    const dispatch = useDispatch();
    const bascket = useSelector((state) => state.bascket);
    const books = bascket.books;

    function handleRemove(i) {
        const prepareBooks = [...books];
        prepareBooks.splice(i, 1);
        localStorage.setItem("basket", JSON.stringify(prepareBooks));
        dispatch(bascketActions.setBooks(prepareBooks));
    }

    function renderBooks() {
        if (books.length) {
            return (
                <div className="basket_books">
                    {
                        books.map((book, i) =>
                            <BookInBasket 
                                key={i} book={book}
                                onRemove={() => handleRemove(i)}
                            />
                        )
                    }
                </div>
            )
        }

        return null;
    }

    return (
        <div className="basket">
            <Header title="Корзина" />
            { renderBooks() }
        </div>
    )
}