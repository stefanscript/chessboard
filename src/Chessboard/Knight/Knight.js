import React from "react";
import "./knight.css";
import cn from "classnames";

function Knight({black, white}) {
    return (
        <button aria-pressed={"false"} aria-label={"knight"} className={cn("knight", {"black": black, white: white})} >
            <div className={"head"}>
                <div className={"ears"} />
                <div className={"snout"} />
            </div>
            <div className={"body"}/>
            <div className={"base"}/>
        </button>
    );
}

export default Knight;
