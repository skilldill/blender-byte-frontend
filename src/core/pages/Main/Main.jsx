import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { Tooltip } from "antd"

import "./style.scss";
import { booksActions } from "../../../store/actions";
import { Header } from "../../components/Header";
import { ROUTER_URLS } from "../../../shared/constants";
import bubble from "../../../assets/bubble.png";

const TAGS_CONTROLS = [
    { tag:"любовь", emoji: "💖" },
    { tag:"путешествия", emoji: "🏕️" },
    { tag:"приключения", emoji: "👣" },
    { tag:"бестселлер", emoji: "🌟" },
    { tag:"детектив", emoji: "🕵️" },
    { tag:"дракон", emoji: "🐲" },
]

export function EmojiControl() {
    const [currentTag, setCurrentTag] = useState(null);
    const dispatch = useDispatch();
    
    function handleClick(tag) {
        setCurrentTag(tag);
        dispatch(booksActions.fetchBooksByTag(tag));
    }

    return (
        <div className="emoji_constrol">
            { TAGS_CONTROLS.map((control, i) => 
                <Tooltip placement="bottom" title={control.tag}>
                    <div 
                        key={`${i}.${control.tag}`}
                        className="emoji"
                        onClick={() => handleClick(control.tag)}
                    >
                        {control.emoji}
                    </div>
                </Tooltip>
            ) }
            { currentTag && <Redirect to={ROUTER_URLS.SHOP} /> }
        </div>
    )
}

export function Main() {
    return (
        <div className="main">
            <Header 
                title="Главная"
                component={
                    <EmojiControl />
                }
            />
            <div className="main_body">
                <p>
                    При помощи искусственного интеллекта 
                    мы собрали для тебя множество интересных книг по тематикам. 
                    Выбери именно то, что итересно тебе нажав на соответствующий смайлик.
                </p>
                <img src={bubble} alt="шарик"/>
            </div>
        </div>
    )
}