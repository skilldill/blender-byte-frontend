import React from "react";
import "./style.scss";

import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { CategoriesContainer } from "../../containers";

export function Shop() {
    return (
        <div className="shop">
            <Header title="Книги" />
            <CategoriesContainer />
        </div>
    )
}