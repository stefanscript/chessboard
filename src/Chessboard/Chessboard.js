import React from "react";
import getSide from "../getSide";
import "./chessboard.css"
import Pawn from "./Pawn/Pawn";

const squares = Array(64).fill(0);

function Chessboard() {
    return (
        <div className="chessboard">
            {squares.map((square, index) => (
                <div key={index} className={`square ${getSide(index)}`}>
                    {(index/8 >= 1 && index/8 < 2) && <Pawn/>}
                    {(index/8 >= 6 && index/8 < 7) && <Pawn/>}
                </div>
                ))}
        </div>
    )
}

export default Chessboard;
