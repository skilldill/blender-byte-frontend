import React from "react";
import "./style.scss";

import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { CategoriesContainer, BooksTableContainer } from "../../containers";
import { BooksTable } from "../../components/BooksTable";

export function Shop() {
    return (
        <div className="shop">
            <Header title="Книги" />
            <CategoriesContainer />
            <BooksTableContainer />
        </div>
    )
}