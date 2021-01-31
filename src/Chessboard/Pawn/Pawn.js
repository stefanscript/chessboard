import React from "react";
import "./pawn.css";
import cn from "classnames";

function Pawn({black, white}) {
    return (
        <button aria-pressed={"false"} aria-label={"pawn"} className={cn("pawn", {"black": black, white: white})} >
            <div className={"top"}/>
            <div className={"top-collar"}/>
            <div className={"trunk"}/>
            <div className={"base-top"}/>
            <div className={"base"}/>
        </button>
    );
}

export default Pawn;
