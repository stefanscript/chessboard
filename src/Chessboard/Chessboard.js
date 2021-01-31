import React from "react";
import getSide from "../getSide";
import "./chessboard.css"
import Pawn from "./Pawn/Pawn";

const squares = Array(64).fill(0);

function Chessboard() {
    return (
        <div className="chessboard">
            {squares.map((square, index) => <div key={index} className={`square ${getSide(index)}`}>
                <Pawn />
            </div>)}
        </div>
    )
}

export default Chessboard;
