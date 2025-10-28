import { Cell } from "../models/Cell";

export class CellService {
    
    isCellFree(cell: Cell): boolean {
        if (!cell.currentPiece) {
            return true;
        }
        return false;
    }
}