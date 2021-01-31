import React from "react";
import "./queen.css";
import cn from "classnames";

function Queen({black, white}) {
    return (
        <button aria-pressed={"false"} aria-label={"queen"} className={cn("queen", {"black": black, white: white})} >
            <div className={"crown-top"}/>
            <div className={"crown"}>
                <div className={"crown-spike"} />
                <div className={"crown-spike"} />
            </div>
            <div className={"top-collar"}/>
            <div className={"trunk"}/>
            <div className={"base-top"}/>
            <div className={"base"}/>
        </button>
    );
}

export default Queen;
