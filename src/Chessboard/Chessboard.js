import React from "react";
import getSide from "../getSide";
import "./chessboard.css"
import Pawn from "./Pawn/Pawn";
import Rook from "./Rook/Rook";
import Knight from "./Knight/Knight";
import Bishop from "./Bishop/Bishop";
import Queen from "./Queen/Queen";
import King from "./King/King";

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
                    {([2, 5, 58, 61].includes(index)) && <Bishop black={index === 2 || index === 5} white={index === 58 || index === 61}/>}
                    {index === 3 && <Queen black/>}
                    {index === 59 && <Queen white/>}
                    {index === 4 && <King black/>}
                    {index === 60 && <King white/>}
                </div>
                ))}
        </div>
    )
}

export default Chessboard;
