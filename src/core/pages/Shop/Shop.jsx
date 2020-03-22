import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import "./style.scss";

import { booksActions } from "../../../store/actions";
import { Header } from "../../components/Header";
import { CategoriesContainer, BooksTableContainer } from "../../containers";

export function Shop() {
    const [query, setQuery] = useState();
    const { Search } = Input;
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(booksActions.fetchBooksByQuery(query));
        setQuery("");
    }

    return (
        <div className="shop">
            <Header 
                title="Книги"
                component={
                    <form onSubmit={handleSubmit}>
                        <Search 
                            size="large"
                            placeholder="Начните вводить название книги"
                            value={query}
                            onChange={(event) => setQuery(event.currentTarget.value)}
                        />
                    </form>
                }
            />
            <CategoriesContainer />
            <BooksTableContainer />
        </div>
    )
}