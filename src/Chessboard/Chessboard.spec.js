import Chessboard from "./Chessboard";
import {render, screen} from "@testing-library/react"

describe("Chessboard", () => {
    it("should show 16 pawn", () => {
        render(<Chessboard />);
        
        expect(screen.getAllByRole("button", {name: /pawn/i})).toHaveLength(16);
    });
    it("should show 4 rooks", () => {
        render(<Chessboard />);
        
        expect(screen.getAllByRole("button", {name: /rook/i})).toHaveLength(4);
    });
});
