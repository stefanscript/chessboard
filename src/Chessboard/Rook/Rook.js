import React from "react";
import "./rook.css";
import cn from "classnames";

function Rook({black, white}) {
    return (
        <button aria-pressed={"false"} aria-label={"rook"} className={cn("rook", {"black": black, white: white})} >
            <div className={"top"}>
                <div className={"top-brick"} />
                <div className={"top-brick"} />
                <div className={"top-brick"} />
            </div>
            <div className={"top-collar"}/>
            <div className={"trunk"}/>
            <div className={"base"}/>
        </button>
    );
}

export default Rook;
