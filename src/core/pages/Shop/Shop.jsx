import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import "./style.scss";

import { booksActions } from "../../../store/actions";
import { api } from "../../../shared/http";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { CategoriesContainer, BooksTableContainer } from "../../containers";
import { BooksTable } from "../../components/BooksTable";

export function Shop() {
    const [query, setQuery] = useState();
    const { Search } = Input;
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(booksActions.fetchBooksByQuery(query));
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