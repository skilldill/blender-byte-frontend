import React, {useState} from "react";
import "./style.scss";

import { Header } from "../../components/Header";
import { Game } from "./components/Game";
import { gameProcess, EMPTY_HACK_PATH } from "./components/Game/gameProcess";

export function EmojiControl() {
    
}

export function Main() {
    const [pathHack, setPathHack] = useState(EMPTY_HACK_PATH);

    // gameProcess(pathHack, setPathHack);

    return (
        <div className="main">
            <Header title="Главная" />
        </div>
    )
}