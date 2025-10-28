export interface Piece {
    color: "BLACK" | "WHITE";
    pieceType: PieceType
}

export type PieceType = "PAWN" | "ROOK" | "BISHOP" | "QUEEN" | "KING" | "KNIGHT"
export type Color = "BLACK" | "WHITE"