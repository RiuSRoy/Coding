import { Cell } from "../models/Cell";
import { IPiece } from "./IPiece";
import { PawnService } from "./PawnService";
import { QueenService } from "./QueenService";

export class PieceFactory {
    getPieceService(startCell: Cell): IPiece | null {
        let pieceService = null;
        if (!startCell.currentPiece) {
            return null;
        }
        switch(startCell.currentPiece?.pieceType) {
            case "QUEEN":
                pieceService = new QueenService();
                break;
            default: 
            pieceService = new PawnService();
        }
        return pieceService;
    }
}