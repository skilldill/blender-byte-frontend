import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";
import { ROUTER_URLS } from "../../../shared/constants";

export function SideMenu() {
    return (
        <div className="side_menu">
            <nav>
                <ul>
                    <li>
                        <Link to={ROUTER_URLS.MAIN}>Главная</Link>
                    </li>
                    <li>
                        <Link to={ROUTER_URLS.SHOP}>Книги</Link>
                    </li>
                    <li>
                        <Link to={ROUTER_URLS.CONTACTS}>Контакты</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}