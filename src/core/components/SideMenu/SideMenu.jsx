import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "./style.scss";
import { ROUTER_URLS } from "../../../shared/constants";

function CustomLink(props) {
    const {to, children} = props;
    const [isHover, setIsHover] = useState(false);

    return (
        <NavLink to={to}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            activeClassName="active_link"
        >
            <span>{children}</span>
            <div className="inner_link" style={{bottom: isHover ? "0px" : "-80px"}}></div>    
        </NavLink>
    )
}

CustomLink.propTypes = {
    to: PropTypes.string.isRequired,
}

export function SideMenu() {
    return (
        <div className="side_menu">
            <nav>
                <ul className="menu_items">
                    <li className="menu_item">
                        <CustomLink to={ROUTER_URLS.MAIN}>
                            Главная
                        </CustomLink>
                    </li>
                    <li className="menu_item">
                        <CustomLink to={ROUTER_URLS.SHOP}>
                            Книги
                        </CustomLink>
                    </li>
                    <li className="menu_item">
                        <CustomLink to={ROUTER_URLS.CONTACTS}>
                            Контакты
                        </CustomLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}