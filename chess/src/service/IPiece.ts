import { Cell } from "../models/Cell";

export interface IPiece {
    move(startCell: Cell, endCell: Cell): void;
    getPieceCode(): string;
    isMovePossible(startCell: Cell, endCell: Cell): boolean;
}


export enum PieceCode {
    "PAWN" = "P",
    "ROOK" = "R",
    "KNIGHT" = "N",
    "BISHOP" = "B",
    "QUEEN" = "Q",
    "KING" = "K"
}

