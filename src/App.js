import React from "react";
import Chessboard from "./Chessboard/Chessboard";

function App() {
    return (
        <>
            <header>
                <h1>Chessboard with chess pieces</h1>
                <h2>using CSS Grid</h2>
            </header>
            <div className={"container"}>
                <Chessboard/>
            </div>
        </>
    );
}

export default App;
