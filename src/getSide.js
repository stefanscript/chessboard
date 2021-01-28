function onEvenRow(index) {
    return [0, 2, 4, 6, 8].find(row => index >= row * 8 && index <= row * 8 + 7) !== undefined;
}

export default function getSide(index) {
    if (onEvenRow(index)) {
        if (index % 2 === 0)
            return "white";
        return "black";
    }
    if (index % 2 === 0)
        return "black";
    return "white";
}
