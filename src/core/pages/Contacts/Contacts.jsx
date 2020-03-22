import React from "react";
import "./style.scss";

import { Header } from "../../components/Header";

export function Contacts() {
    return (
        <div className="contacts">
            <Header  title="Контакты" />
            <div className="contacts_content">
                <div>
                    <b>Телефон издательства:</b> +7(911)833-80-39
                </div>
                <div>
                    <b>Почтовый адрес издательства:</b> 195273, Санкт-Петербург, пр. Науки 77/2 оф. 115
                </div>
                <div>
                    <b>Юридический адрес издательства:</b> ООО "ПРОКДИ" 195197 г. Санкт-Петербург, ул. Минеральная, 13 литер К.
                </div>
            </div>
        </div>
    )
}