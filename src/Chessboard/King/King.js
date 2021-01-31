import React from "react";
import "./king.css";
import cn from "classnames";

function King({black, white}) {
    return (
        <button aria-pressed={"false"} aria-label={"king"} className={cn("king", {"black": black, white: white})} >
            <div className={"crown-cross"}>
                <div className={"crown-cross-line"}/>
                <div className={"crown-cross-line"}/>
            </div>
            <div className={"crown-top"}/>
            <div className={"crown"} />
            <div className={"top-collar"}/>
            <div className={"trunk"}/>
            <div className={"base-top"}/>
            <div className={"base"}/>
        </button>
    );
}

export default King;
