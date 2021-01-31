import Chessboard from "./Chessboard";
import {render, screen} from "@testing-library/react"

describe("Chessboard", () => {
    it("should show 16 pawn", () => {
        render(<Chessboard />);
        
        expect(screen.getAllByRole("button", {name: /pawn/i, hidden: true})).toHaveLength(16);
    })
});
