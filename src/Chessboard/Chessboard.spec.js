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
    it("should show 4 knight", () => {
        render(<Chessboard />);
        
        expect(screen.getAllByRole("button", {name: /knight/i})).toHaveLength(4);
    });
    it("should show 4 bishops", () => {
        render(<Chessboard />);
        
        expect(screen.getAllByRole("button", {name: /bishop/i})).toHaveLength(4);
    });
    it("should show 2 queens", () => {
        render(<Chessboard />);
        
        expect(screen.getAllByRole("button", {name: /queen/i})).toHaveLength(2);
    });
    it("should show 2 kings", () => {
        render(<Chessboard />);
        
        expect(screen.getAllByRole("button", {name: /king/i})).toHaveLength(2);
    });
});
