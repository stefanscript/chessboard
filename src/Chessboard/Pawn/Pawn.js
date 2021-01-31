import React from "react";
import "./pawn.css";

function Pawn() {
    return (
        <button aria-pressed={"false"} className={"pawn"}>
        <div className={"top"}/>
        <div className={"top-collar"}/>
        <div className={"trunk"}/>
        <div className={"base-top"}/>
        <div className={"base"}/>
    </button>)
}

export default Pawn;
