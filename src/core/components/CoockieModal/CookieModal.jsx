import React, { useState } from "react";
import { Button } from "antd";

import "./style.scss";
import cookiePicture from "../../../assets/cookie.png";


export function CookieModal(props) {
    const [isShow, setIsShow] = useState(true);
    const { onAccept } = props;

    function handleAccept() {
        onAccept && onAccept();
        localStorage.setItem("acceptCookie", "true");
        setIsShow(false);
    }

    return (
        <div className={`cookie ${!isShow ? "hide" : ""}`}>
            <img src={cookiePicture} alt="Печенька"/>
            <p>
                Мы используем файлы cookie на нашем сайте. Если вы согласаны с этим нажмите
                "Принять" иначе просим вас покинуть сайт.
            </p>
            <Button type="primary" shape="round" size="small"
                onClick={handleAccept}
            >
                Принять
            </Button>
        </div>
    )
}