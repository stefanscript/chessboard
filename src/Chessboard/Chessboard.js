import React from "react";
import getSide from "../getSide";
import "./chessboard.css"
import Pawn from "./Pawn/Pawn";
import Rook from "./Rook/Rook";
import Knight from "./Knight/Knight";

const squares = Array(64).fill(0);

function Chessboard() {
    return (
        <div className="chessboard">
            {squares.map((square, index) => (
                <div key={index} className={`square ${getSide(index)}`}>
                    {(index/8 >= 1 && index/8 < 2) && <Pawn black/>}
                    {(index/8 >= 6 && index/8 < 7) && <Pawn white/>}
                    {([0, 7, 56, 63].includes(index)) && <Rook black={index === 0 || index === 7} white={index === 56 || index === 63}/>}
                    {([1, 6, 57, 62].includes(index)) && <Knight black={index === 1 || index === 6} white={index === 57 || index === 62}/>}
                </div>
                ))}
        </div>
    )
}

export default Chessboard;
