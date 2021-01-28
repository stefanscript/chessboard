import React from "react";
import getSide from "./getSide";

const squares = Array(64).fill(0);

function App() {
    return (
        <div className="chessboard">
            {squares.map((square, index) => <div key={index} className={`square ${getSide(index)}`} />)}
        </div>
    );
}

export default App;
