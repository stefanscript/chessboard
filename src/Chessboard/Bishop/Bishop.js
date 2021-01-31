import React from "react";
import "./bishop.css";
import cn from "classnames";

function Bishop({black, white}) {
    return (
        <button aria-pressed={"false"} aria-label={"bishop"} className={cn("bishop", {"black": black, white: white})} >
            <div className={"top-hat"}/>
            <div className={"top"}/>
            <div className={"top-collar"}/>
            <div className={"trunk"}/>
            <div className={"base-top"}/>
            <div className={"base"}/>
        </button>
    );
}

export default Bishop;
