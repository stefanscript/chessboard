import React from "react";
import "./rook.css";

function Pawn() {
    return (
        <button aria-pressed={"false"} aria-label={"rook"} className={"rook"} >
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

export default Pawn;
