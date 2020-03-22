import React, { useState } from "react";
import PropTypes from "prop-types";
import {useSelector, useDispatch} from "react-redux";
import { Button, Empty } from "antd";
import "./style.scss";

import { ROUTER_URLS } from "../../../shared/constants";
import bookMock from "../../../assets/book_mock.png";
import { shortText } from "../../../shared/utils";
import { Header } from "../../components/Header";
import { bascketActions } from "../../../store/actions";
import { Link } from "react-router-dom";

function BookInBasket(props) {
    const [loaded, setLoaded] = useState(false);
    const {book, onRemove} = props;

    return (
        <div className="book_in_basket">
            <Link to={`${ROUTER_URLS.BOOK}/${book.ID}`}>
                <img 
                    src={!loaded ? bookMock : book.Photo}
                    alt={`книга ${book.FullName}`}
                    height={215}
                    onLoad={() => setLoaded(true)}
                />
            </Link>
            <div className="description">
                <h2>{book.FullName}, автор: {book.Author}</h2>
                <p>{shortText(book.Description)}</p>
                <div className="controls">
                    
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
                    <div className="basket_control">
                        <Button shape="round" type="primary">
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            )
        }

        return (
            <div style={{marginTop: "50px"}}>
                <Empty description="Корзина пуста" />
            </div>
        );
    }

    return (
        <div className="basket">
            <Header title="Корзина" />
            { renderBooks() }
        </div>
    )
}