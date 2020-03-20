import React from "react";
import { useParams } from "react-router-dom";

import "./style.scss";

export function Book() {
    const { bookId } = useParams();

    return (
        <div className="book">
            <h1>Книгa: {bookId}</h1>
        </div>
    )
}