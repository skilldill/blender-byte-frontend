import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

import "./style.scss";

export function SearchForm() {
    return (
        <div className="search_form">
            <form>
                <input type="text" placeholder="Название книги"/>
            </form>
            <div className="btn_search">
                <button>
                    <SearchOutlined />
                </button>
            </div>
        </div>
    )
}