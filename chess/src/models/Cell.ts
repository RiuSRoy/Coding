import { Piece } from "./Piece";

export interface Cell {
    x: number;
    y: number;
    currentPiece?: Piece;
}

// export type Col = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
// export type Row = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";