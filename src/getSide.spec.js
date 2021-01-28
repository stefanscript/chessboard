import getSide from "./getSide";

describe("getSide", () => {
    it("first is white", () => {
        expect(getSide(0)).toEqual("white");
    });
    it("second is black", () => {
        expect(getSide(1)).toEqual("black");
    });
    it("8th is black", () => {
        expect(getSide(7)).toEqual("black");
    });
    it("9th is black", () => {
        expect(getSide(8)).toEqual("black");
    });
    it("10th is white", () => {
        expect(getSide(9)).toEqual("white");
    });
    it("17th is white", () => {
        expect(getSide(16)).toEqual("white");
    });
    it("25th is black", () => {
        expect(getSide(24)).toEqual("black");
    });
    it("33th is white", () => {
        expect(getSide(32)).toEqual("white");
    });
    it("49th is white", () => {
        expect(getSide(48)).toEqual("white");
    });
});
