import React from "react";
import "./style.scss";

import { SideMenu } from "../SideMenu";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { CookieModal } from "../CoockieModal";

export function BaseContainer({ children }) {
    const acceptCookie = localStorage.getItem("acceptCookie");

    return (
        <div className="base_container">
            <div className="menu_container">
                <SideMenu />
            </div>
            <div className="content_container">
                { children }
                <Footer />
            </div>
            { !acceptCookie && <CookieModal /> }
        </div>
    )
}