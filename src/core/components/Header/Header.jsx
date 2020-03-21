import React, {useState} from "react";
import PropTypes from "prop-types"

import "./style.scss";
import logo from "../../../assets/logo.svg";
import { TRANSLATE_LAYERS_COEFFS } from "../../../shared/constants";

function BaseHeaderContent(props) {
    const { mousePosition } = props;

    const styleCircle = mousePosition && {
        transform: `translateY(${mousePosition.x * TRANSLATE_LAYERS_COEFFS.MIDDLE}px)`
    };

    const styleSqare = mousePosition && {
        transform: `rotate(20deg) translateX(${mousePosition.x * TRANSLATE_LAYERS_COEFFS.BACK}px)`
    };

    const styleRectangle = mousePosition && {
        transform: `rotate(-30deg) translateX(${mousePosition.x * TRANSLATE_LAYERS_COEFFS.BACK}px)`
    };

    const styleBigCircle = mousePosition && {
        transform: `translateY(${mousePosition.x * TRANSLATE_LAYERS_COEFFS.MIDDLE}px)`
    };

    const styleLogo = mousePosition && { 
        transform: `rotate(30deg) translate(${mousePosition.x * TRANSLATE_LAYERS_COEFFS.FRONT}px)`
    };

    return (
        <>
            <div className="header_figure circle" style={styleCircle}></div>
            <div className="header_figure square" style={styleSqare}></div>
            <div className="header_figure rectangle" style={styleRectangle}></div>
            <div className="header_figure big_circle" style={styleBigCircle}></div>
            <div className="header_figure logo" style={styleLogo}>
                <img src={logo} alt="квадратная скобка, красная запятая, квадратная скобка"/>
            </div>
        </>
    )
}

export function Header(props) {
    const { title, children } = props;
    const [mousePosition, setMousePosition] = useState(null);

    function handleMouseMove(event) {
        setMousePosition({ x: event.clientX })
    }

    return (
        <header className="header"
            onMouseMove={handleMouseMove}
        >
            <h1 className="title">{title}</h1>
            {children ? children : <BaseHeaderContent mousePosition={mousePosition} />}
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

BaseHeaderContent.propTypes = {
    mousePosition: PropTypes.object
}
