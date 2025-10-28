import { Cell } from "../models/Cell";
import { IPiece, PieceCode } from "./IPiece";


export class PawnService implements IPiece {
    move(startCell: Cell, endCell: Cell): void {
        const xDiff = Math.abs(startCell.x - endCell.x);
        const yDiff = Math.abs(startCell.y - endCell.y);
        if (xDiff === 1 && yDiff === 1 && endCell.currentPiece && endCell.currentPiece?.color !== startCell.currentPiece?.color) {
            //captured opponent's piece
        }
        endCell.currentPiece = startCell.currentPiece;
        startCell.currentPiece = undefined;
    }
    isMovePossible(startCell: Cell, endCell: Cell): boolean {
        
        // white pawns move upwards, black pawns move downwards
        if (startCell.y < endCell.y && startCell.currentPiece?.color === 'WHITE') {
            return false;
        }
        if (startCell.y > endCell.y && startCell.currentPiece?.color === 'BLACK') {
            return false;
        }
        const xDiff = Math.abs(startCell.x - endCell.x);
        const yDiff = Math.abs(startCell.y - endCell.y);

        if (xDiff === 0 && yDiff === 1 && !endCell.currentPiece) {
            return true; // Move one square forward if unoccupied
        } else if (xDiff === 1 && yDiff === 1 && endCell.currentPiece && endCell.currentPiece?.color !== startCell.currentPiece?.color) {
            return true; // Capture diagonally
        } else if (xDiff === 0 && yDiff === 2 && !endCell.currentPiece && this.isFirstMove(startCell)) {
            return true; // Move two squares forward on the first move
        }

        return false;
    }

    isFirstMove(startCell: Cell) {
        return (startCell.currentPiece?.color === "BLACK" && startCell.y === 2) || (startCell.currentPiece?.color === "WHITE" && startCell.y === 7)
    }
    

    getPieceCode() {
        return PieceCode.PAWN;
    }

}