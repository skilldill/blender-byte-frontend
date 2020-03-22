import React, { useState, useRef, useEffect } from "react";
import "./style.scss";

import { gameProcess, EMPTY_HACK_PATH } from "./gameProcess";

export function Game(props) {
    const [code, setCode] = useState("");
    const inputCode = useRef(null);

    function handleChange(event) {
        setCode(event.currentTarget.value);
    }
    
    function handleSubmitCode() {

    }

    return (
        <div className="game_console">
            <div className="console_header">
                <div className="btn_close"></div>
            </div>
            <div className="game_field" onClick={() => inputCode.current.focus()}>
                <p>{props.trackHack}</p>
                <p>{code}<span className="cursor">▌</span></p>
            </div>
            <form onSubmit={handleSubmitCode}>
                <input 
                    ref={inputCode}
                    type="text"
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}