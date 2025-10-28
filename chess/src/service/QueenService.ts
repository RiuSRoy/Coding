import { Cell } from "../models/Cell";
import { IPiece, PieceCode } from "./IPiece";

enum Direction {
    Horizontal = 'HORIZONTAL',
    Vertical = 'VERTICAL',
    Diagonal = 'DIAGONAL'
}

export class QueenService implements IPiece {
    move(startCell: Cell, endCell: Cell): void {
        throw new Error("Method not implemented.");
    }
    getPieceCode(): string {
        return PieceCode.QUEEN;
    }

    isMovePossible(startCell: Cell, endCell: Cell): boolean {
        if (getMoveDirection(startCell, endCell) === null) {
            return false;
        }
        return endCell.currentPiece ? false : true;
    }
    
}

function  getMoveDirection(startCell: Cell, endCell: Cell): Direction | null {
    const xDiff = Math.abs(startCell.x - endCell.x);
    const yDiff = Math.abs(startCell.y - endCell.y);

    if (xDiff === 0 && yDiff !== 0) {
        return Direction.Vertical;
    } else if (xDiff !== 0 && yDiff === 0) {
        return Direction.Horizontal;
    } else if (xDiff === yDiff) {
        return Direction.Diagonal;
    } else {
        return null;
    }
}






